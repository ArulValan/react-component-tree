// React component tree is a nested data structure, children are Trees

export type Tree = {
  id: string;
  name: string;
  fileName: string;
  filePath: string;
  importPath: string;
  expanded: boolean;
  depth: number;
  count: number;
  thirdParty: boolean;
  reactRouter: boolean;
  reduxConnect: boolean;
  children: Tree[];
  parentList: string[];
  props: { [key: string]: boolean; };
  error: string;
};


export interface IRawNode {
  id: string;
  name: string;
  parent: INode;
  children: INode[];
  error: string;
  props: Record<string, any>;
  expanded: boolean;
  redux: boolean;
  thirdParty: boolean;
  filePath: string;
}

export interface INode extends IRawNode {
  index: number;
  level: number;
}