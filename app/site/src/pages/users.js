import React from 'react'
import SectionTitle from '../components/section-title'
import Widget from '../components/widget'
import ContactUs from '../components/sample-forms/contact-us'

const Index = () => (
  <>
    <SectionTitle title="Add" subtitle="Users" />
    <Widget
      title="Contact us"
      description={<span>Sample contact us form</span>}>
      <div className="w-full flex">
        <div className="w-full lg:w-1/2">
          <ContactUs />
        </div>
      </div>
    </Widget>
  </>
)
export default Index
