/**
 * @generated SignedSource<<7497ad2c0747b2f73076a3cb2e557c15>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmFragment_filmFragment$data = {
  readonly director: string | null;
  readonly id: string;
  readonly releaseDate: string | null;
  readonly title: string | null;
  readonly " $fragmentType": "FilmFragment_filmFragment";
};
export type FilmFragment_filmFragment$key = {
  readonly " $data"?: FilmFragment_filmFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmFragment_filmFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FilmFragment_filmFragment",
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
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "41d86c13d63c6928dd319ed62892efec";

export default node;
