/* global describe, it, expect */

import { winstonResponse } from '../src/Winston'

describe('Doublethink', () => {
  it('Should return untruth', () => {
    expect(winstonResponse()).toEqual(5)
  })
})
