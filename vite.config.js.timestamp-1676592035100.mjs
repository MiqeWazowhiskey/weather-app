// vite.config.js
import { defineConfig, loadEnv } from "file:///C:/Users/izlen/OneDrive/Belgeler/weather-app/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/izlen/OneDrive/Belgeler/weather-app/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()]
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxpemxlblxcXFxPbmVEcml2ZVxcXFxCZWxnZWxlclxcXFx3ZWF0aGVyLWFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcaXpsZW5cXFxcT25lRHJpdmVcXFxcQmVsZ2VsZXJcXFxcd2VhdGhlci1hcHBcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2l6bGVuL09uZURyaXZlL0JlbGdlbGVyL3dlYXRoZXItYXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLGxvYWRFbnYgIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5leHBvcnQgZGVmYXVsdCAoeyBtb2RlIH0pID0+IHtcclxuICAgIC8vIExvYWQgYXBwLWxldmVsIGVudiB2YXJzIHRvIG5vZGUtbGV2ZWwgZW52IHZhcnMuXHJcbiAgICBwcm9jZXNzLmVudiA9IHsuLi5wcm9jZXNzLmVudiwgLi4ubG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKX07XHJcblxyXG4gICAgcmV0dXJuIGRlZmluZUNvbmZpZyh7XHJcbiAgICAgICAgLy8gWW91IGNhbiBub3cgdXNlIHByb2Nlc3MuZW52LkdSSURfRVhQRVJJTUVOVEFMX0VOQUJMRURcclxuICAgICAgcGx1Z2luczogW3JlYWN0KCldLFxyXG4gICAgICB9KTtcclxufVxyXG5cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVSxTQUFTLGNBQWEsZUFBZ0I7QUFDeFcsT0FBTyxXQUFXO0FBQ2xCLElBQU8sc0JBQVEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUV6QixVQUFRLE1BQU0sRUFBQyxHQUFHLFFBQVEsS0FBSyxHQUFHLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQyxFQUFDO0FBRTlELFNBQU8sYUFBYTtBQUFBLElBRWxCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixDQUFDO0FBQ1A7IiwKICAibmFtZXMiOiBbXQp9Cg==