> **责任链模式**：解决请求的发送者与请求的接受者之间的耦合，通过职责链上的多个对象对分解请求流程，实现请求在多个对象之间的传递，直到最后一个对象完成请求的处理。

它是一种处理请求的模式，让多个处理器都有机会处理该请求，直到其中某个处理成功为止。它将多个处理器串成链，然后让请求在链上传递。

用责任链模式设计此报销流程时，每个审核者只关心自己责任范围内的请求，并且处理它。对于超出自己责任范围的，扔给下一个审核者处理，这样，将来继续添加审核者的时候，不用改动现有逻辑。

```js
// Manager：只能审核1000元以下的报销；

// Director：只能审核10000元以下的报销；

// CEO：可以审核任意额度。

const HANDLER_STATUS = {
	/**
	 * 交给下一个处理
	 */
	NEXT: "next",

	/**
	 * 审核不通过
	 */
	REJECT: "reject",

	/**
	 * 审核通过
	 */
	ACCEPT: "accept",
};

class Request {
	constructor(name, amount) {
		this.name = name;

		this.amount = amount;
	}
}

function ManagerHandler(request) {
	if (request.amount <= 1000) {
		// 对bob有偏见 不给他通过审核
		if (request.name === "bob") {
			return HANDLER_STATUS.REJECT;
		}
		return HANDLER_STATUS.ACCEPT;
	} else {
		// 超过1000元 没有权限处理不了，给下一个人处理
		return HANDLER_STATUS.NEXT;
	}
}

function DirectorHandler(request) {
	if (request.amount <= 10000) {
		return HANDLER_STATUS.ACCEPT;
	} else {
	    // 超过10000元 没有权限处理不了，给下一个人处理
		return HANDLER_STATUS.NEXT;
	}
}

function CeoHandler(request) {
	return HANDLER_STATUS.ACCEPT;
}

class ChainHandler {
	handlerList = [];

	addHandler(handler) {
		if (typeof handler !== "function") {
			throw new Error("handler must be function!");
		}

		this.handlerList.push(handler);
	}

	handleHandler(request) {
		for (const handler of this.handlerList) {
			const res = handler(request);

			if (res !== HANDLER_STATUS.NEXT) {
				console.log(
					request.name,
					res === HANDLER_STATUS.ACCEPT ? "is accept" : "is reject"
				);
				return;
			}
		}
	}
}

const ch1 = new ChainHandler();

ch1.addHandler(ManagerHandler);

ch1.addHandler(DirectorHandler);

ch1.addHandler(CeoHandler);

ch1.handleHandler(new Request("bob", 500));

ch1.handleHandler(new Request("clean", 1500));

ch1.handleHandler(new Request("scz", 150000));
```
