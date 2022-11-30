import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
// import {GithubIcon} from '../icons/GithubIcon';

export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const collapseItems = [
      'Company',
      'Resources',
      'Apps',
      'Pricing',
      'Products',
   ];
   return (
     <Navbar
       isBordered
       css={{
         overflow: "hidden",
         "& .nextui-navbar-container": {
           background: "$background",
           borderBottom: "none",
         },
       }}
     >
       <Navbar.Brand>
         <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
         <AcmeLogo />
         <Text b color="inherit" hideIn="xs">
           FENRIR
         </Text>
         <Navbar.Content
           hideIn="sm"
           css={{
             pl: "6rem",
           }}
         >
           <Dropdown isBordered>
             <Navbar.Item>
               <Dropdown.Button
                 auto
                 light
                 css={{
                   px: 0,
                   dflex: "center",
                   svg: { pe: "none" },
                 }}
                 iconRight={icons.chevron}
                 ripple={false}
               >
                 Company
               </Dropdown.Button>
             </Navbar.Item>
             <Dropdown.Menu
               aria-label="ACME features"
               css={{
                 $$dropdownMenuWidth: "340px",
                 $$dropdownItemHeight: "70px",
                 "& .nextui-dropdown-item": {
                   py: "$4",
                   svg: {
                     color: "$secondary",
                     mr: "$4",
                   },
                   "& .nextui-dropdown-item-content": {
                     w: "100%",
                     fontWeight: "$semibold",
                   },
                 },
               }}
             >
               <Dropdown.Item
                 key="autoscaling"
                 showFullDescription
                 description="ACME scales apps to meet user demand, automagically, based on load."
                 icon={icons.scale}
               >
                 About
               </Dropdown.Item>
               <Dropdown.Item
                 key="usage_metrics"
                 showFullDescription
                 description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                 icon={icons.activity}
               >
                 Pricing
               </Dropdown.Item>
               <Dropdown.Item
                 key="production_ready"
                 showFullDescription
                 description="ACME runs on ACME, join us and others serving requests at web scale."
                 icon={icons.flash}
               >
                 Careers
               </Dropdown.Item>
               <Dropdown.Item
                 key="99_uptime"
                 showFullDescription
                 description="Applications stay on the grid with high availability and high uptime guarantees."
                 icon={icons.server}
               >
                 Funding
               </Dropdown.Item>
               <Dropdown.Item
                 key="supreme_support"
                 showFullDescription
                 description="Overcome any challenge with a supporting team ready to respond."
                 icon={icons.user}
               >
                 Support
               </Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>
           <Dropdown isBordered>
             <Navbar.Item>
               <Dropdown.Button
                 auto
                 light
                 css={{
                   px: 0,
                   dflex: "center",
                   svg: { pe: "none" },
                 }}
                 iconRight={icons.chevron}
                 ripple={false}
               >
                 Resources
               </Dropdown.Button>
             </Navbar.Item>
             <Dropdown.Menu
               aria-label="ACME features"
               css={{
                 $$dropdownMenuWidth: "340px",
                 $$dropdownItemHeight: "70px",
                 "& .nextui-dropdown-item": {
                   py: "$4",
                   svg: {
                     color: "$secondary",
                     mr: "$4",
                   },
                   "& .nextui-dropdown-item-content": {
                     w: "100%",
                     fontWeight: "$semibold",
                   },
                 },
               }}
             >
               <Dropdown.Item
                 key="autoscaling"
                 showFullDescription
                 description="ACME scales apps to meet user demand, automagically, based on load."
                 icon={icons.scale}
               >
                 Blog
               </Dropdown.Item>
               <Dropdown.Item
                 key="usage_metrics"
                 showFullDescription
                 description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                 icon={icons.activity}
               >
                 Customers
               </Dropdown.Item>
               <Dropdown.Item
                 key="production_ready"
                 showFullDescription
                 description="ACME runs on ACME, join us and others serving requests at web scale."
                 icon={icons.flash}
               >
                 Events
               </Dropdown.Item>
               <Dropdown.Item
                 key="99_uptime"
                 showFullDescription
                 description="Applications stay on the grid with high availability and high uptime guarantees."
                 icon={icons.server}
               >
                 Community
               </Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>
           <Navbar.Link isActive href="#">
             Apps
           </Navbar.Link>
           <Navbar.Link href="#pricing">Pricing</Navbar.Link>
           <Dropdown isBordered>
             <Navbar.Item>
               <Dropdown.Button
                 auto
                 light
                 css={{
                   px: 0,
                   dflex: "center",
                   svg: { pe: "none" },
                 }}
                 iconRight={icons.chevron}
                 ripple={false}
               >
                 Products
               </Dropdown.Button>
             </Navbar.Item>
             <Dropdown.Menu
               aria-label="ACME features"
               css={{
                 $$dropdownMenuWidth: "340px",
                 $$dropdownItemHeight: "70px",
                 "& .nextui-dropdown-item": {
                   py: "$4",
                   svg: {
                     color: "$secondary",
                     mr: "$4",
                   },
                   "& .nextui-dropdown-item-content": {
                     w: "100%",
                     fontWeight: "$semibold",
                   },
                 },
               }}
             >
               <Dropdown.Item
                 key="autoscaling"
                 showFullDescription
                 description="ACME scales apps to meet user demand, automagically, based on load."
                 icon={icons.scale}
               >
                 All Products
               </Dropdown.Item>
               <Dropdown.Item
                 key="usage_metrics"
                 showFullDescription
                 description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                 icon={icons.activity}
               >
                 Community
               </Dropdown.Item>
               <Dropdown.Item
                 key="production_ready"
                 showFullDescription
                 description="ACME runs on ACME, join us and others serving requests at web scale."
                 icon={icons.flash}
               >
                 Pricing
               </Dropdown.Item>
               <Dropdown.Item
                 key="99_uptime"
                 showFullDescription
                 description="Applications stay on the grid with high availability and high uptime guarantees."
                 icon={icons.server}
               >
                 FAQ
               </Dropdown.Item>
               <Dropdown.Item
                 key="supreme_support"
                 showFullDescription
                 description="Overcome any challenge with a supporting team ready to respond."
                 icon={icons.user}
               >
                 +Supreme Support
               </Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>
         </Navbar.Content>
       </Navbar.Brand>

       <Navbar.Collapse>
         {collapseItems.map((item, index) => (
           <Navbar.CollapseItem key={item}>
             <Link
               color="inherit"
               css={{
                 minWidth: "100%",
               }}
               href="#"
             >
               {item}
             </Link>
           </Navbar.CollapseItem>
         ))}
         <Navbar.CollapseItem>
           <Link
             color="inherit"
             css={{
               minWidth: "100%",
             }}
             target="_blank"
             href="https://github.com/Siumauricio/landing-template-nextui"
           >
             {/* <GithubIcon /> */}
           </Link>
         </Navbar.CollapseItem>
         <Navbar.CollapseItem>
           {/* <Switch
             checked={isDark}
             onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
           /> */}
         </Navbar.CollapseItem>
       </Navbar.Collapse>
       <Navbar.Content>
         {/* <ModalLogin /> */}

         <Navbar.Item>
           <Button auto flat>
             <a href="mailto:fenrir.ltd@gmail.com">Contact</a>
           </Button>
         </Navbar.Item>
         {/* <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/Siumauricio/landing-template-nextui"
               >
                  <GithubIcon />
               </Link>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item> */}
       </Navbar.Content>
     </Navbar>
   );
};
