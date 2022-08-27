/**
 * @generated SignedSource<<875b0c946dc72839f90764fa22c120b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pages_index_PersonalDetail_Query$variables = {};
export type pages_index_PersonalDetail_Query$data = {
  readonly allFilms: {
    readonly films: ReadonlyArray<{
      readonly director: string | null;
      readonly releaseDate: string | null;
      readonly title: string | null;
    } | null> | null;
  } | null;
};
export type pages_index_PersonalDetail_Query = {
  response: pages_index_PersonalDetail_Query$data;
  variables: pages_index_PersonalDetail_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "director",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "releaseDate",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_index_PersonalDetail_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FilmsConnection",
        "kind": "LinkedField",
        "name": "allFilms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Film",
            "kind": "LinkedField",
            "name": "films",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pages_index_PersonalDetail_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FilmsConnection",
        "kind": "LinkedField",
        "name": "allFilms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Film",
            "kind": "LinkedField",
            "name": "films",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2718f2ac1d99e10d710faacdae9912b9",
    "id": null,
    "metadata": {},
    "name": "pages_index_PersonalDetail_Query",
    "operationKind": "query",
    "text": "query pages_index_PersonalDetail_Query {\n  allFilms {\n    films {\n      title\n      director\n      releaseDate\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "de3d4b07774e095e0302c6ab125ff06e";

export default node;
