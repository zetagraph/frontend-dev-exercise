# Implementation Notes

Thanks for taking the time to review this.

## Overview

The work is split into two parts:

- Existing page updates  
- New page (React)

I organized things into two PRs to show how I’d normally work — building things up in small steps instead of one big commit.

## Approach

Given the time limit, I focused on:

- Keeping things simple and readable  
- Making sure the layout works well across screen sizes  
- Using semantic HTML where it made sense  
- Showing progress clearly through commits  

## Key Decisions

- Broke the work into smaller steps (layout → styling → components → cleanup)  
- Kept components fairly lightweight instead of abstracting too early  
- Tried to balance speed with code clarity  

## Accessibility

- Used semantic elements where possible  
- Made sure interactive elements can be used with a keyboard  
- Added visible focus states  
- Paid attention to accessible naming where relevant  

## If I had more time

- Clean up spacing / polish a bit more  
- Handle more edge cases  
- Add some basic tests  
- Possibly refactor for more reuse where it makes sense  

## AI Usage

I used AI (Codex) a bit to sanity-check parts of the implementation and catch small issues, but the code and decisions are my own.

## How to review

You can start with the PRs to see how things evolved:

- PR #1 — existing page  
- PR #2 — new page  

Then check the final state in the main branch.
