/**
 * @generated SignedSource<<8ecd346587f2c7af2a439066cb58a44c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Id_FilmDetail_Query$variables = {
  id: string;
};
export type Id_FilmDetail_Query$data = {
  readonly film: {
    readonly producers: ReadonlyArray<string | null> | null;
    readonly " $fragmentSpreads": FragmentRefs<"FilmFragment_filmFragment">;
  } | null;
};
export type Id_FilmDetail_Query = {
  response: Id_FilmDetail_Query$data;
  variables: Id_FilmDetail_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "producers",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Id_FilmDetail_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Film",
        "kind": "LinkedField",
        "name": "film",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FilmFragment_filmFragment"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Id_FilmDetail_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Film",
        "kind": "LinkedField",
        "name": "film",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "director",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "releaseDate",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "750285c035a06b45810a19e743874528",
    "id": null,
    "metadata": {},
    "name": "Id_FilmDetail_Query",
    "operationKind": "query",
    "text": "query Id_FilmDetail_Query(\n  $id: ID!\n) {\n  film(id: $id) {\n    producers\n    ...FilmFragment_filmFragment\n    id\n  }\n}\n\nfragment FilmFragment_filmFragment on Film {\n  id\n  title\n  director\n  releaseDate\n}\n"
  }
};
})();

(node as any).hash = "2609dd8e95229cebd103c61081d5fef8";

export default node;
