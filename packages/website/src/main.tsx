/*! Copyright [Amazon.com](http://amazon.com/), Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
const root = document.getElementById('root');
root &&
  createRoot(root).render(
    <Home />
  );
