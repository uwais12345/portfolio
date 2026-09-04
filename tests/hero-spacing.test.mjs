import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const heroSource = await readFile(new URL('../src/sections/Hero.jsx', import.meta.url), 'utf8');

test('hero is content-driven instead of forcing viewport height', () => {
    assert.match(heroSource, /min-h-0\s+flex\s+items-start/);
    assert.doesNotMatch(heroSource, /min-h-\[calc\(100vh-4rem\)\]/);
    assert.doesNotMatch(heroSource, /min-h-screen\s+flex\s+items-center/);
    assert.match(heroSource, /pt-24\s+pb-20/);
});

test('hero does not stack large child margins on top of its spacing system', () => {
    assert.match(heroSource, /w-full\s+space-y-4/);
    assert.doesNotMatch(heroSource, /className="block md:hidden my-6/);
    assert.doesNotMatch(heroSource, /className="my-6 max-w-xl/);
});

test('hero cycles through the portfolio role titles with a typewriter line', () => {
    assert.match(heroSource, /const ROLE_TITLES = \[/);
    assert.match(heroSource, /'Software Developer'/);
    assert.match(heroSource, /'Junior Full-Stack Developer'/);
    assert.match(heroSource, /'MERN Stack Developer'/);
    assert.match(heroSource, /'AI Engineer'/);
    assert.match(heroSource, /ROLE_TITLES\.length/);
    assert.match(heroSource, /!currentState\.isDeleting\s+&&\s+currentState\.text === ROLE_TITLES/);
    assert.match(heroSource, /aria-live="polite"/);
    assert.match(heroSource, /text-2xl font-semibold tracking-tight/);
    assert.match(heroSource, /dark:via-cyan-300/);
});