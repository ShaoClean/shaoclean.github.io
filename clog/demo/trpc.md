---
icon: nodeJS
date: 2023-06-26
category:
    - 后端
tag:
    - trpc
    - 学习笔记
---

trpc 主要解决了端到端之间的类型重复写的问题。这也是我前阵子向豪哥提出来过的一个痛点，在前后端都用 ts 开发的时候，一个接口的类型前后端都需要定义一遍，很浪费时间。

其实我最希望用的就是想 swagger 一样，写好接口，然后执行某个命令，直接在前端自动生成接口和类型。

这两天跟着 trpc 的官网尝试了一下，确实是挺震撼的。但是还是有点没有达到我心里的预期，主要是服务端的验证参数的过程是用其它的库进行的，不是直接使用 ts 做的，这一点比较不符合我的预期。

## 后端代码

index.ts:

```ts
import { z } from "zod";

const express = require("express");
import { publicProcedure } from "./trpc/trpc";
import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import * as cors from "cors";
const app = express();
const port = 3000;

app.use(cors());

async function getUsers() {
	const users = [
		{
			id: 1,
			name: "clean",
		},
		{
			id: 2,
			name: "scz",
		},
	];
	return users;
}

const createContext = ({
	req,
	res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = inferAsyncReturnType<typeof createContext>;
const t = initTRPC.context<Context>().create();

const appRouter = t.router({
	userList: publicProcedure.query(async opts => {
		console.log("input", opts.input);
		// Retrieve users from a datasource, this is an imaginary database
		const users: { id: number; name: string }[] = await getUsers();

		return users;
	}),
	createUser: publicProcedure
		.input(
			z.object({
				name: z.string(),
				age: z.number(),
				hobby: z.boolean(),
			})
		)
		.mutation(async () => {
			return [];
		}),
});

app.use(
	"/trpc",
	trpcExpress.createExpressMiddleware({
		router: appRouter,
		createContext,
	})
);

app.listen(port, () => {
	console.log("run at port:", port);
});

export type AppRouter = typeof appRouter;
```

trpc.ts:

```ts
import { initTRPC } from "@trpc/server";

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
```

## 前端代码

App.tsx:

```tsx
import { memo, useCallback, useState } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "./trpc";
import Trpctest from "./components/trpc/trpctest";

function App() {
	const [queryClient] = useState(() => new QueryClient());
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: "http://localhost:3000/trpc",
				}),
			],
		})
	);
	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{/* Your app here */}
				<div className="App">
					<Trpctest />
				</div>
			</QueryClientProvider>
		</trpc.Provider>
	);
}

export default App;
```

trpc.ts:

```ts
import { createTRPCReact } from "@trpc/react-query";
//主要是这个路径，引入的是后端index.ts中导出的AppRouter类型
import type { AppRouter } from "../../../scz/project/express-trpc/src/index";

export const trpc = createTRPCReact<AppRouter>();
```

TrpcTest.tsx:

```tsx
import { trpc } from "../../trpc";

export default function Trpctest() {
	async function a() {
		const res = await trpc.userList.useQuery();
		const data = res.data;
	}
	a();

	async function b() {
		const mutation = await trpc.createUser.useMutation();
		mutation.mutate({
			name: "",
			hobby: true,
			age: 18,
		});
	}
	return <div>111</div>;
}
```
