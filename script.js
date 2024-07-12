const tabs = Document.querySELectorAll ( '[data-tab-target')
const tabcontents = document .querySelector( '[data-tab-content')

tabs.forEach(tab => {
 tab.addEentListener('click',() =>}
 const target = document .querySelector(tab.dataset.tabTarget)
 tabcontents.forEach(tabContent =>  { 
    tabContent.classlist ('active')
 })
 target.classlist.add('active')
 
