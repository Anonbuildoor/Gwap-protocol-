/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Strata generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docs: [
    "getting_started",
    "react",
    {
      type: "category",
      label: "Learn",
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "learn" }],
    },
    {
      type: "category",
      label: "Launchpad",
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "launchpad" }],
    },
    "playground",
    "curve_configurator",
    {
      type: "category",
      label: "API",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Spl Token Bonding",
          items: [
            "api/spl-token-bonding/modules",
            {
              type: "category",
              label: "Classes",
              items: [
                {
                  type: "autogenerated",
                  dirName: "api/spl-token-bonding/classes",
                },
              ],
            },
            {
              type: "category",
              label: "Interfaces",
              items: [
                {
                  type: "autogenerated",
                  dirName: "api/spl-token-bonding/interfaces",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Spl Token Collective",
          items: [
            "api/spl-token-collective/modules",
            {
              type: "category",
              label: "Classes",
              items: [
                {
                  type: "autogenerated",
                  dirName: "api/spl-token-collective/classes",
                },
              ],
            },
            {
              type: "category",
              label: "Interfaces",
              items: [
                {
                  type: "autogenerated",
                  dirName: "api/spl-token-collective/interfaces",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Fungible Entangler",
          items: [
            "api/fungible-entangler/modules",
            {
              type: "category",
              label: "Classes",
              items: [
                {
                  type: "autogenerated",
                  dirName: "api/fungible-entangler/classes",
                },
              ],
            },
            {
              type: "category",
              label: "Interfaces",
              items: [
                {
                  type: "autogenerated",
                  dirName: "api/fungible-entangler/interfaces",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Marketplace SDK",
          items: [
            "api/marketplace-sdk/modules",
            {
              type: "category",
              label: "Classes",
              items: [
                {
                  type: "autogenerated",
                  dirName: "api/marketplace-sdk/classes",
                },
              ],
            },
            {
              type: "category",
              label: "Interfaces",
              items: [
                {
                  type: "autogenerated",
                  dirName: "api/marketplace-sdk/interfaces",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Marketplace UI",
          items: [
            "api/marketplace-ui/modules",
            {
              type: "category",
              label: "Classes",
              items: [
                {
                  type: "autogenerated",
                  dirName: "api/marketplace-ui/classes",
                },
              ],
            },
            {
              type: "category",
              label: "Interfaces",
              items: [
                {
                  type: "autogenerated",
                  dirName: "api/marketplace-ui/interfaces",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "React",
          items: [
            "api/react/modules",
            {
              type: "category",
              label: "Classes",
              items: [{ type: "autogenerated", dirName: "api/react/classes" }],
            },
            {
              type: "category",
              label: "Interfaces",
              items: [
                { type: "autogenerated", dirName: "api/react/interfaces" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
