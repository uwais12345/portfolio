import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const projectsSource = await readFile(new URL('../src/sections/Projects.jsx', import.meta.url), 'utf8');

test('Route Resilience is available in the existing project filter and card data', () => {
    assert.match(projectsSource, /filterGroup: "AI & Geospatial"/);
    assert.match(projectsSource, /title: "Route Resilience"/);
    assert.match(projectsSource, /const categories = \["All", "AI & MERN", "AI & Geospatial", "Data Analysis"\]/);
});

test('Route Resilience distinguishes the sample prototype from planned research', () => {
    assert.match(projectsSource, /hardcoded five-node sample graph/);
    assert.match(projectsSource, /Current Prototype/);
    assert.match(projectsSource, /Research pipeline/);
    assert.match(projectsSource, /planned, not implemented/);
    assert.match(projectsSource, /AI segmentation, skeletonization, graph healing, and real-data resilience analysis are not implemented yet/);
});

test('Route Resilience does not invent live demo or GitHub links', () => {
    assert.match(projectsSource, /github: null,[\s\S]*?live: null/);
    assert.match(projectsSource, /Demo and source links coming soon/);
});