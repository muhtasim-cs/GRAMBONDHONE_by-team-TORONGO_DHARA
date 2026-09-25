import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
    watch: {
      ignored: ['**/dist/**', '**/.git/**']
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        homepage: resolve(__dirname, 'homepage.html'),
        investor: resolve(__dirname, 'investor.html'),
        investor_airisk: resolve(__dirname, 'investor_airisk.html'),
        investor_dashboard: resolve(__dirname, 'investor_dashboard.html'),
        investor_financials: resolve(__dirname, 'investor_financials.html'),
        investor_marketplace: resolve(__dirname, 'investor_marketplace.html'),
        investor_profile: resolve(__dirname, 'investor_profile.html'),
        investor_projects: resolve(__dirname, 'investor_projects.html'),
        login: resolve(__dirname, 'login.html'),
        marketplace: resolve(__dirname, 'marketplace.html'),
        market: resolve(__dirname, 'market.html'),
        projects: resolve(__dirname, 'projects.html'),
        orders: resolve(__dirname, 'orders.html'),
        register: resolve(__dirname, 'register.html'),
        admin: resolve(__dirname, 'Admin/admin.html'),
        farmer: resolve(__dirname, 'Farmer/farmer.html'),
        tasfi_main: resolve(__dirname, 'Tasfi_Investor_Homepage_Market/index.html'),
        tasfi_homepage: resolve(__dirname, 'Tasfi_Investor_Homepage_Market/homepage.html'),
        tasfi_investor: resolve(__dirname, 'Tasfi_Investor_Homepage_Market/investor.html'),
        tasfi_investor_airisk: resolve(__dirname, 'Tasfi_Investor_Homepage_Market/investor_airisk.html'),
        tasfi_investor_dashboard: resolve(__dirname, 'Tasfi_Investor_Homepage_Market/investor_dashboard.html'),
        tasfi_investor_financials: resolve(__dirname, 'Tasfi_Investor_Homepage_Market/investor_financials.html'),
        tasfi_investor_marketplace: resolve(__dirname, 'Tasfi_Investor_Homepage_Market/investor_marketplace.html'),
        tasfi_investor_profile: resolve(__dirname, 'Tasfi_Investor_Homepage_Market/investor_profile.html'),
        tasfi_investor_projects: resolve(__dirname, 'Tasfi_Investor_Homepage_Market/investor_projects.html'),
        tasfi_login: resolve(__dirname, 'Tasfi_Investor_Homepage_Market/login.html'),
        tasfi_marketplace: resolve(__dirname, 'Tasfi_Investor_Homepage_Market/marketplace.html'),
        tasfi_market: resolve(__dirname, 'Tasfi_Investor_Homepage_Market/market.html'),
        tasfi_projects: resolve(__dirname, 'Tasfi_Investor_Homepage_Market/projects.html'),
        tasfi_orders: resolve(__dirname, 'Tasfi_Investor_Homepage_Market/orders.html'),
        tasfi_register: resolve(__dirname, 'Tasfi_Investor_Homepage_Market/register.html'),
      }
    }
  }
});
