import React from 'react';
import { Accordion, AccordionPanel, Tree, Tabs, TabPanel } from 'rc-easyui';
 
class CustomAccordions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [
        {
          id: 1,
          text: "My Documents",
          children: [
            {
              id: 11,
              text: "Photos",
              children: [
                {
                  id: 111,
                  text: "Friend"
                },
                {
                  id: 112,
                  text: "Wife"
                },
                {
                  id: 113,
                  text: "Company"
                }
              ]
            },
            {
              id: 12,
              text: "Program Files",
              state: "closed",
              children: [
                {
                  id: 121,
                  text: "Intel"
                },
                {
                  id: 122,
                  text: "Java"
                },
                {
                  id: 123,
                  text: "Microsoft Office"
                },
                {
                  id: 124,
                  text: "Games"
                }
              ]
            },
            {
              id: 13,
              text: "index.html"
            },
            {
              id: 14,
              text: "about.html"
            },
            {
              id: 15,
              text: "welcome.html"
            }
          ]
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>Custom Accordion</h2>
        <Accordion 
            multiple
            animate
        >
          <AccordionPanel 
            iconCls="icon-man" 
            headerCls="hd"
            header={() => (
              <div>
                <div class="panel-title panel-with-icon">Friends</div>
                <div class="right">
                  <span class="count">124</span>
                </div>
              </div>
            )}
          >
            <Tree data={this.state.treeData}></Tree>
          </AccordionPanel>
          <AccordionPanel 
            iconCls="icon-help" 
            bodyCls="f-row"
            header={() => (
              <div>
                <div class="panel-title panel-with-icon">Helps</div>
                <div class="right">
                  <span class="count">1,024</span>
                </div>
              </div>
            )}
          >
            <Tabs class="f-full" border={false}>
              <TabPanel title="Java">
                <p>Java (Indonesian: Jawa) is an island of Indonesia. With a population of 135 million (excluding the 3.6 million on the island of Madura which is administered as part of the provinces of Java), Java is the world's most populous island, and one of the most densely populated places in the world.</p>
              </TabPanel>
              <TabPanel title="C#">
                <p>C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.</p>
              </TabPanel>
              <TabPanel title="Ruby">
                <p>A dynamic, reflective, general-purpose object-oriented programming language.</p>
              </TabPanel>
              <TabPanel title="Fortran">
                <p>Fortran (previously FORTRAN) is a general-purpose, imperative programming language that is especially suited to numeric computation and scientific computing.</p>
              </TabPanel>
            </Tabs>
          </AccordionPanel>
          <AccordionPanel title="Printers" iconCls="icon-print">
            <p>Printers Content</p>
          </AccordionPanel>
        </Accordion>
      </div>
    );
  }
}
 
export default CustomAccordions;