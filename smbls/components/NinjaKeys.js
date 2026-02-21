import files from '../files.js';

const NINJA_STYLES = `
  position: fixed;
  z-index: 999999;
  --ninja-accent-color: #8cba83;
  --ninja-modal-background: #141414;
  --ninja-modal-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  --ninja-actions-background: #141414;
  --ninja-selected-background: rgba(140, 186, 131, 0.15);
  --ninja-text-color: #e5e5e5;
  --ninja-secondary-text-color: #888;
  --ninja-footer-background: #0d0d0d;
  --ninja-separator-border-color: rgba(255, 255, 255, 0.08);
  --ninja-icon-color: #7081d8;
  --ninja-secondary-background: #1a1a1a;
  --ninja-z-index: 999999;
  --ninja-width: 640px;
  --ninja-modal-border-radius: 12px;
  --ninja-modal-border: 1px solid rgba(255, 255, 255, 0.1);
`;

const NINJA_INTERNAL_STYLES = `
  .modal-content {
    border-radius: 12px !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    overflow: hidden !important;
  }
  .search {
    padding: 16px !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  }
  .search input {
    font-size: 16px !important;
  }
  .group-header {
    padding: 8px 16px !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    color: #666 !important;
  }
  .ninja-action {
    padding: 10px 16px !important;
    gap: 10px !important;
    border-radius: 0 !important;
    align-items: center !important;
  }
  .ninja-action .ninja-icon {
    margin: 0 !important;
    width: 24px !important;
    min-width: 24px !important;
    height: 24px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex-shrink: 0 !important;
  }
  .ninja-action .ninja-icon img {
    margin: 0 !important;
  }
  .ninja-action .ninja-icon svg {
    width: 20px !important;
    height: 20px !important;
  }
  .ninja-action .ninja-title {
    font-size: 14px !important;
  }
  .ninja-action.selected {
    background: rgba(140, 186, 131, 0.12) !important;
  }
  .modal-footer {
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    padding: 10px 16px !important;
  }
`;

export const NinjaKeys = {
  tag: "div",
  scope: {
    getNetworkIcon: (protocol) => {
      const file = files[`${protocol}.png`];
      return file?.content?.src || null;
    },
    createImgIcon: (src) => {
      if (!src) return null;
      return `<img src="${src}" style="width:24px;height:24px;border-radius:6px;object-fit:cover;flex-shrink:0;" />`;
    },
    addFilter: (rootState, newFilter) => {
      const current = rootState?.filter || {};
      rootState?.update({ filter: { ...current, ...newFilter } });
    },
    removeFilter: (rootState, key) => {
      const current = rootState?.filter || {};
      const updated = { ...current };
      delete updated[key];
      rootState?.update({
        filter: Object.keys(updated).length ? updated : null,
      });
    },
    buildNinjaData: (fleet, rootState, el) => {
      const currentFilter = rootState?.filter || {};
      const navigate = (path) => el?.call("router", path, el.__ref?.root);

      const data = [
        {
          id: "dashboard",
          title: "Go to Dashboard",
          section: "Navigation",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>',
          handler: () => {
            navigate("/dashboard");
          },
        },
        {
          id: "add-network",
          title: "Add New Network",
          section: "Actions",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>',
          handler: () => {
            rootState?.update({ modal: "/add-network" });
          },
        },
      ];

      // Collect unique values
      const envs = new Set();
      const clouds = new Set();
      const rewardClaims = new Set();

      fleet?.forEach((network) => {
        network.validators?.forEach((v) => {
          if (v.env) envs.add(v.env);
          if (v.cloud_provider) clouds.add(v.cloud_provider);
          if (v.reward_claim) rewardClaims.add(v.reward_claim);
        });
        network.rpc_nodes?.forEach((r) => {
          if (r.env) envs.add(r.env);
          if (r.cloud_provider) clouds.add(r.cloud_provider);
          if (r.reward_claim) rewardClaims.add(r.reward_claim);
        });
      });

      // Add filter actions
      data.push({
        id: "filter-clear",
        title: "Clear all filters",
        section: "Filters",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
        keywords: "clear reset filter",
        handler: () => {
          rootState?.update({ filter: null });
        },
      });

      // Type filters (add to existing filter)
      data.push({
        id: "filter-validators",
        title:
          currentFilter.type === "validator"
            ? "✓ Validators (click to remove)"
            : "Add filter: Validators",
        section: "Filters",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
        keywords: "type:validator filter validator",
        handler: () => {
          if (currentFilter.type === "validator") {
            el.scope.removeFilter(rootState, "type");
          } else {
            el.scope.addFilter(rootState, { type: "validator" });
          }
        },
      });

      data.push({
        id: "filter-rpc",
        title:
          currentFilter.type === "rpc"
            ? "✓ RPC Nodes (click to remove)"
            : "Add filter: RPC Nodes",
        section: "Filters",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
        keywords: "type:rpc filter rpc",
        handler: () => {
          if (currentFilter.type === "rpc") {
            el.scope.removeFilter(rootState, "type");
          } else {
            el.scope.addFilter(rootState, { type: "rpc" });
          }
        },
      });

      // Environment filters
      envs.forEach((env) => {
        const isActive = currentFilter.env === env;
        data.push({
          id: `filter-env-${env}`,
          title: isActive ? `✓ ${env} (click to remove)` : `Add filter: ${env}`,
          section: "Filters - Environment",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>',
          keywords: `env:${env.toLowerCase()} filter ${env.toLowerCase()}`,
          handler: () => {
            if (isActive) {
              el.scope.removeFilter(rootState, "env");
            } else {
              el.scope.addFilter(rootState, { env });
            }
          },
        });
      });

      // Cloud filters
      clouds.forEach((cloud) => {
        const isActive = currentFilter.cloud === cloud;
        data.push({
          id: `filter-cloud-${cloud}`,
          title: isActive
            ? `✓ ${cloud} (click to remove)`
            : `Add filter: ${cloud}`,
          section: "Filters - Cloud",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>',
          keywords: `cloud:${cloud.toLowerCase()} filter ${cloud.toLowerCase()}`,
          handler: () => {
            if (isActive) {
              el.scope.removeFilter(rootState, "cloud");
            } else {
              el.scope.addFilter(rootState, { cloud });
            }
          },
        });
      });

      // Reward Claim filters
      rewardClaims.forEach((claim) => {
        const isActive = currentFilter.rewardClaim === claim;
        data.push({
          id: `filter-reward-${claim}`,
          title: isActive
            ? `✓ ${claim} (click to remove)`
            : `Add filter: ${claim} Rewards`,
          section: "Filters - Reward Claim",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
          keywords: `reward:${claim.toLowerCase()} claim ${claim.toLowerCase()} automatic manual`,
          handler: () => {
            if (isActive) {
              el.scope.removeFilter(rootState, "rewardClaim");
            } else {
              el.scope.addFilter(rootState, { rewardClaim: claim });
            }
          },
        });
      });

      // Add combined filter presets
      const envsArray = Array.from(envs);
      const cloudsArray = Array.from(clouds);

      envsArray.forEach((env) => {
        cloudsArray.forEach((cloud) => {
          data.push({
            id: `filter-combo-${env}-${cloud}`,
            title: `${env} on ${cloud}`,
            section: "Filters - Combined",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
            keywords: `env:${env.toLowerCase()} cloud:${cloud.toLowerCase()} ${env.toLowerCase()} ${cloud.toLowerCase()} combined`,
            handler: () => {
              rootState?.update({ filter: { env, cloud } });
            },
          });
        });
      });

      if (!fleet?.length) return data;

      fleet.forEach((network) => {
        const iconSrc = el.scope.getNetworkIcon(network.protocol);

        data.push({
          id: `network-${network.protocol}`,
          title: network.protocol,
          section: "Networks",
          icon:
            el.scope.createImgIcon(iconSrc) ||
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>',
          keywords: `${network.network_type || ""} ${network.network_layer || ""}`,
          handler: () => {
            navigate(`/network/${network.protocol}`);
          },
        });

        network.validators?.forEach((validator) => {
          data.push({
            id: `validator-${validator.uid}`,
            title: `${validator.moniker || "Validator"} (${network.protocol})`,
            section: "Validators",
            icon:
              el.scope.createImgIcon(iconSrc) ||
              '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
            keywords: `${network.protocol} ${validator.env || ""} ${validator.cloud_provider || ""} validator env:${(validator.env || "").toLowerCase()} type:validator cloud:${(validator.cloud_provider || "").toLowerCase()}`,
            handler: () => {
              navigate(`/node/${network.protocol}/validator/${validator.uid}`);
            },
          });
        });

        network.rpc_nodes?.forEach((rpc) => {
          data.push({
            id: `rpc-${rpc.uid}`,
            title: `${rpc.moniker || "RPC Node"} (${network.protocol})`,
            section: "RPC Nodes",
            icon:
              el.scope.createImgIcon(iconSrc) ||
              '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
            keywords: `${network.protocol} ${rpc.env || ""} ${rpc.cloud_provider || ""} rpc env:${(rpc.env || "").toLowerCase()} type:rpc cloud:${(rpc.cloud_provider || "").toLowerCase()}`,
            handler: () => {
              navigate(`/node/${network.protocol}/rpc/${rpc.uid}`);
            },
          });
        });
      });

      return data;
    },
  },
  props: {
    display: "none",
    onRender: async (el, s) => {
      await import("ninja-keys");

      if (!window.__ninjaKeys) {
        const ninja = document.createElement("ninja-keys");
        ninja.setAttribute(
          "placeholder",
          "Search... (combine filters: env:testnet cloud:gcp)",
        );
        ninja.setAttribute("hideBreadcrumbs", "");
        ninja.style.cssText = NINJA_STYLES;
        document.body.appendChild(ninja);
        window.__ninjaKeys = ninja;
      }

      const ninja = window.__ninjaKeys;

      // Inject internal styles into shadow DOM
      if (!ninja.__stylesInjected) {
        const injectStyles = () => {
          if (ninja.shadowRoot) {
            const styleEl = document.createElement("style");
            styleEl.textContent = NINJA_INTERNAL_STYLES;
            ninja.shadowRoot.appendChild(styleEl);
            ninja.__stylesInjected = true;
          }
        };
        // Try immediately and also after a short delay
        injectStyles();
        setTimeout(injectStyles, 100);
      }

      const updateData = () => {
        const fleet = s.fleet || s.root?.fleet || [];
        ninja.data = el.scope.buildNinjaData(fleet, s.root, el);
      };

      updateData();

      // Re-update when filter changes to show checkmarks
      const originalUpdate = s.root?.update?.bind(s.root);
      if (originalUpdate && !s.root.__ninjaPatched) {
        s.root.__ninjaPatched = true;
        s.root.update = (data) => {
          originalUpdate(data);
          if (data.filter !== undefined) {
            setTimeout(updateData, 0);
          }
        };
      }

      const checkFleet = setInterval(() => {
        const fleet = s.fleet || s.root?.fleet || [];
        if (fleet.length > 0) {
          updateData();
          clearInterval(checkFleet);
        }
      }, 500);

      setTimeout(() => clearInterval(checkFleet), 10000);
    },
  },
};
