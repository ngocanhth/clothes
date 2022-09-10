import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="justify-self-end pt-16 pb-8 lg:pt-24 lg:pb-10">
    <div className="px-4 mx-auto max-w-8xl lg:px-4">
      <div className="grid gap-12 lg:grid-cols-6 lg:gap-24">
        <div className="col-span-2">
          <a className="flex mb-6" href="/">
            <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
              <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%'}}>
                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20
																																																															xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2733%27/%3e" style={{display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px'}} />
              </span>
              <img alt="Flowbite Logo" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} />
              <noscript />
            </span>
            <span className="self-center ml-3 text-2xl font-semibold text-gray-900 dark:text-white">Flowbite</span>
          </a>
          <p className="text-gray-600 dark:text-gray-400">Flowbite is an ecosystem built on top of Tailwind CSS including a component library, block sections, a Figma design system and other resources.</p>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Resources</h3>
          <ul>
            <li className="mb-4">
              <a href="https://flowbite.com/docs/getting-started/introduction/" className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Documentation</a>
            </li>
            <li className="mb-4">
              <a className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline" href="/blocks/">Flowbite Blocks</a>
            </li>
            <li className="mb-4">
              <a className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline" href="/figma/">Figma design</a>
            </li>
            <li className="mb-4">
              <a className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline" href="/pro/">Pro version</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Help &amp; support</h3>
          <ul>
            <li className="mb-4">
              <a className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline" href="/contact/">Contact us</a>
            </li>
            <li className="mb-4">
              <a className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline" href="/dashboard/support/">Support Center</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Follow us</h3>
          <ul>
            <li className="mb-4">
              <a href="https://discord.gg/4eeurUVvTy" rel="noreferrer nofollow" className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Discord</a>
            </li>
            <li className="mb-4">
              <a href="https://github.com/themesberg" rel="noreferrer nofollow" className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Github</a>
            </li>
            <li className="mb-4">
              <a href="https://twitter.com/zoltanszogyenyi" rel="noreferrer nofollow" className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Twitter</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Legal</h3>
          <ul>
            <li className="mb-4">
              <a className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline" href="/license/">License (EULA)</a>
            </li>
            <li className="mb-4">
              <a className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline" href="/privacy-policy/">Privacy policy</a>
            </li>
            <li className="mb-4">
              <a className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline" href="/terms-and-conditions/">Terms &amp; conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-8 border-gray-200 dark:border-gray-700 lg:my-12" />
      <span className="block font-normal text-center text-gray-600 dark:text-gray-400">© 2019-2022 All Rights Reserved. Flowbite™ is a registered trademark.</span>
    </div>
  </footer>
  );
};

export default Footer;
