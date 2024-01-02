/**
 * @license
 * Copyright (c) 2014, 2023, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { h } from "preact";

export function Content() {


  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <div>
        <h4>Dynamic Lookup in Oracle JET</h4>
      </div>
      <div>
        
        <oj-form-layout columns={1} class="oj-formlayout-full-width">
          <oj-input-text labelHint="Lookup Name"></oj-input-text>
          <oj-text-area labelHint="Description" class="oj-sm-padding-2x-top" rows={5}></oj-text-area>
        </oj-form-layout>

        <oj-toolbar class="oj-sm-justify-content-flex-end">
          <oj-button>Update</oj-button>
        </oj-toolbar>

      </div>

      <div>
        <oj-accordion>
          <oj-collapsible slot="default">

            <h1 slot="header">Lookup Layout</h1>

          </oj-collapsible>
        </oj-accordion>
      </div>
    </div>
  );
};
