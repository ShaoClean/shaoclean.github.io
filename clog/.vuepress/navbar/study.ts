export default{
  text: "学习笔记",
  icon: "study",
  prefix: "/study/",
  children: [
    {
      text:"前端",
      prefix: "frontend/",
      children: [
        { text: "Vue", icon: "vue", link: "vue/" },
        { text: "React", icon: "react", link: "react/" },
        { text: "Angular", icon: "angular", link: "angular/" },
        { text: "JS", icon: "javascript", link: "js/" },
        { text: "TS", icon: "typescript", link: "ts/" },
      ],
    },
    {
      text:"后端",
      prefix: "backend/",
      children: [
        {
          text: "Java",
          icon: "java",
          link: "java/",
        },
        {
          text: "Node",
          icon: "nodeJS",
          link: "nodejs/",
        },
      ],
    },
    {
      text:"其他",
      children: [
        {
          text: "Java",
          icon: "java",
          link: "article6",
        },
        {
          text: "Node",
          icon: "nodeJS",
          link: "article6",
        },
      ],
    },
  ],
}