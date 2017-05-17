import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import SelectFilter from '../'

describe('SelectFilter', function() {

    it('root tag is a html div tag', function() {
        expect(shallow(<SelectFilter />).is('div')).to.equal(true)
    })

})
