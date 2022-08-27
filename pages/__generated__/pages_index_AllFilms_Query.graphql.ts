/**
 * @generated SignedSource<<032af15126eb8a0f43980642e65ce5e3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pages_index_AllFilms_Query$variables = {};
export type pages_index_AllFilms_Query$data = {
  readonly allFilms: {
    readonly films: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"FilmFragment_filmFragment">;
    } | null> | null;
  } | null;
};
export type pages_index_AllFilms_Query = {
  response: pages_index_AllFilms_Query$data;
  variables: pages_index_AllFilms_Query$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_index_AllFilms_Query",
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FilmFragment_filmFragment"
              }
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
    "name": "pages_index_AllFilms_Query",
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4e29f4d86eeb864da2ec7bfb28670f66",
    "id": null,
    "metadata": {},
    "name": "pages_index_AllFilms_Query",
    "operationKind": "query",
    "text": "query pages_index_AllFilms_Query {\n  allFilms {\n    films {\n      ...FilmFragment_filmFragment\n      id\n    }\n  }\n}\n\nfragment FilmFragment_filmFragment on Film {\n  id\n  title\n  director\n  releaseDate\n}\n"
  }
};

(node as any).hash = "98e7c2f17387b6cd45b4af770f32bcfe";

export default node;
