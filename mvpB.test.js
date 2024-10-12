import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Sprint 7 Challenge Learner Tests', () => {
//   /*
//   👉 TASK 1 - Unit Testing of sum function at the bottom of this module

//   Test the following. You can create separate tests or a single test with multiple assertions.

//     [1] sum() // throws an error 'pass valid numbers'
//     [2] sum(2, 'seven') // throws an error 'pass valid numbers'
//     [3] sum(1, 3) // returns 4
//     [4] sum('1', 2) // returns 3
//     [5] sum('10', '3') // returns 13
//   */
test("throws an error if valid number is not passed in", () => {
  const message = "pass valid numbers"
  expect(() => sum()).toThrowError(message)
  expect(() => sum(2, 'seven')).toThrowError(message)
})
test("returns the sum of two numbers", () => {
  let expected1 = 4
  let expected2 = 3
  let expected3 = 13
  expect(sum(1, 3)).toBe(expected1)
  expect(sum("1", 2)).toBe(expected2)
  expect(sum("10",'3')).toBe(expected3)
})
//   /*
//   👉 TASK 2 - Integration Testing of HelloWorld component at the bottom of this module

//   Test the <HelloWorld /> component found below...
//     - using `screen.queryByText` to capture nodes
//     - using `toBeInTheDocument` to assert their existence in the DOM

//     [1] renders a link that reads "Home"
//     [2] renders a link that reads "About"
//     [3] renders a link that reads "Blog"
//     [4] renders a text that reads "The Truth"
//     [5] renders a text that reads "JavaScript is pretty awesome"
//     [6] renders a text that includes "javaScript is pretty" (use exact = false)
//   */
    test("links appear properly", () => {
      render(<HelloWorld/>)
      const link1 = screen.queryByText('Home')
      const link2 = screen.queryByText('About')
      const link3 = screen.queryByText('Blog')
      expect(link1).toBeInTheDocument()
      expect(link2).toBeInTheDocument()
      expect(link3).toBeInTheDocument()
    })
    test("text reads properly", () => {
      render(<HelloWorld/>)
      const text1 = screen.queryByText('The Truth')
      const text2 = screen.queryByText('JavaScript is pretty awesome')
      const text3 = screen.queryByText('javaScript is pretty', { exact: false })
      expect(text1).toBeInTheDocument()
      expect(text2).toBeInTheDocument()
      expect(text3).toBeInTheDocument()
               
    })
})

function sum(a, b) {
  a = Number(a)
  b = Number(b)
  if (isNaN(a) || isNaN(b)) {
    throw new Error('pass valid numbers')
  }
  return a + b
}

function HelloWorld() {
  return (
    <div>
      <h1>Hello World Component</h1>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Blog</a>
      </nav>
      <main>
        <section>
          <h2>The Truth</h2>
          <p>JavaScript is pretty awesome</p>
        </section>
      </main>
    </div>
  )
}
