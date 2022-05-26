const arr = [
  { id: 2, name: "部门B", parentId: 0 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 1, name: "部门A", parentId: 2 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 },
];

function toTree(data, pId) {
  const loop = (parentId) => {
    const res = []; // 当前父节点的子节点列表
    data.forEach((item) => {
      if (item.parentId === parentId) {
        // 找到孩子
        item.children = loop(item.id); // 每个孩子都递归找它的子节点列表
        res.push(item); // 入列
      }
    });
    return res; // 返回res
  };
  return loop(pId);
}

const treeObj = {
  id: 1,
  children: [
    {
      id: 2,
      children: [
        { id: 4, children: [] },
        { id: 5, children: [] },
      ],
    },
    {
      id: 3,
      children: [{ id: 6, children: [] }],
    },
  ],
};

function treeToArr(data) {
  const res = [{ id: data.id, parentId: null }];
  const loop = (data) => {
    data.children.forEach((item) => {
      res.push({ id: item.id, parentId: data.id });
      loop(item);
    });
  };
  loop(data);
  return res;
}

console.log(treeToArr(treeObj));
