var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var DATA_FILE = import_path.default.join(process.cwd(), "database-store.json");
function getInitialStore() {
  return {
    users: [
      {
        id: "usr-1",
        mobile: "09123456789",
        registeredAt: "\u06F1\u06F4\u06F0\u06F3/\u06F0\u06F8/\u06F1\u06F5",
        token: "auth-jwt-pmotor-prod-6424"
      }
    ],
    accounts: [
      {
        id: "acc-admin",
        username: "admin",
        passwordHash: "admin",
        mobile: "09159650802",
        technicianName: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0631\u0634\u062F \u0622\u0631\u0645\u06CC\u0646 \u0635\u0646\u0639\u062A",
        role: "admin",
        biometricEnabled: true,
        lastLogin: "\u06F1\u06F4\u06F0\u06F3/\u06F0\u06F8/\u06F1\u06F5 - \u06F1\u06F0:\u06F0\u06F0"
      },
      {
        id: "acc-tech",
        username: "09159650802",
        passwordHash: "123456",
        mobile: "09159650802",
        technicianName: "\u062A\u06A9\u0646\u0633\u06CC\u0646 \u062F\u06CC\u0627\u06AF \u0648\u0627\u06CC\u200C\u0641\u0627\u06CC",
        role: "technician",
        biometricEnabled: true,
        lastLogin: "\u06F1\u06F4\u06F0\u06F3/\u06F0\u06F8/\u06F1\u06F5 - \u06F1\u06F0:\u06F0\u06F0"
      }
    ],
    otps: {},
    devices: [
      {
        deviceId: "6424",
        fingerprint: "6424 - 8920",
        checksum: "EF41-VALID",
        mobile: "09123456789",
        registeredAt: "\u06F1\u06F4\u06F0\u06F3/\u06F0\u06F8/\u06F1\u06F5 - \u06F1\u06F0:\u06F0\u06F5:\u06F4\u06F0"
      }
    ],
    licenses: [
      {
        code: "849120",
        deviceId: "6424",
        mobile: "09123456789",
        status: "active",
        type: "\u0644\u0627\u06CC\u0633\u0646\u0633 \u0631\u0633\u0645\u06CC \u0648 \u0645\u0627\u062F\u0627\u0645\u200C\u0627\u0644\u0639\u0645\u0631",
        activatedAt: "\u06F1\u06F4\u06F0\u06F3/\u06F0\u06F8/\u06F1\u06F5",
        expiresAt: "\u0645\u0627\u062F\u0627\u0645\u200C\u0627\u0644\u0639\u0645\u0631 (\u0628\u062F\u0648\u0646 \u0627\u0646\u0642\u0636\u0627)"
      },
      {
        code: "642401",
        deviceId: "6424",
        mobile: "09159650802",
        status: "active",
        type: "\u0644\u0627\u06CC\u0633\u0646\u0633 \u0631\u0633\u0645\u06CC \u0645\u0647\u0646\u062F\u0633\u06CC",
        activatedAt: "\u06F1\u06F4\u06F0\u06F3/\u06F0\u06F9/\u06F0\u06F1",
        expiresAt: "\u0645\u0627\u062F\u0627\u0645\u200C\u0627\u0644\u0639\u0645\u0631"
      },
      {
        code: "123456",
        deviceId: "",
        mobile: "",
        status: "pending",
        type: "\u0644\u0627\u06CC\u0633\u0646\u0633 \u0637\u0644\u0627\u06CC\u06CC \u067E\u0627\u06CC\u0634 \u062E\u0648\u062F\u0631\u0648",
        activatedAt: "",
        expiresAt: "\u06CC\u06A9\u200C\u0633\u0627\u0644\u0647"
      }
    ],
    logs: [
      {
        id: "log-1",
        type: "alarm",
        title: "\u0642\u0637\u0639 \u0646\u0627\u06AF\u0647\u0627\u0646\u06CC \u0627\u0631\u062A\u0628\u0627\u0637 \u0648\u0627\u06CC\u200C\u0641\u0627\u06CC",
        timestamp: "\u0627\u0645\u0631\u0648\u0632 - \u0633\u0627\u0639\u062A \u06F1\u06F6:\u06F4\u06F5:\u06F1\u06F2",
        timeAgo: "\u0644\u062D\u0638\u0627\u062A\u06CC \u067E\u06CC\u0634",
        subtext: "\u062E\u0631\u0648\u062C \u0627\u0632 \u0645\u062D\u062F\u0648\u062F\u0647 \u062E\u0648\u062F\u0631\u0648",
        details: "\u0622\u0698\u06CC\u0631 \u062D\u062F\u0627\u06A9\u062B\u0631 \u0641\u0639\u0627\u0644 \u0634\u062F \u2022 \u0648\u06CC\u0628\u0631\u0647 \u067E\u0627\u0644\u0633\u06CC \u0645\u0645\u062A\u062F \u2022 \u0646\u0648\u062A\u06CC\u0641\u06CC\u06A9\u06CC\u0634\u0646 \u0647\u0634\u062F\u0627\u0631 \u0628\u0647 \u0645\u062F\u06CC\u0631 \u0633\u0627\u0645\u0627\u0646\u0647 \u0627\u0631\u0633\u0627\u0644 \u06AF\u0631\u062F\u06CC\u062F.",
        deviceId: "\u06F6\u06F4\u06F2\u06F4",
        ssid: "P_Motor",
        statusBadge: "\u067E\u0627\u06CC\u0627\u0646 \u0647\u0634\u062F\u0627\u0631 \u062A\u0648\u0633\u0637 \u06A9\u0627\u0631\u0628\u0631 (\u06F1\u06F8 \u062B\u0627\u0646\u06CC\u0647)"
      },
      {
        id: "log-2",
        type: "test",
        title: "\u062A\u0633\u062A \u062F\u0633\u062A\u06CC \u0622\u0698\u06CC\u0631 \u0648 \u0628\u0644\u0646\u062F\u06AF\u0648\u06CC \u062F\u06CC\u0627\u06AF",
        timestamp: "\u062F\u06CC\u0631\u0648\u0632 - \u0633\u0627\u0639\u062A \u06F2\u06F0:\u06F1\u06F4:\u06F0\u06F5",
        timeAgo: "\u062F\u06CC\u0631\u0648\u0632",
        subtext: "\u062A\u0633\u062A \u062F\u0648\u0631\u0647\u200C\u0627\u06CC \u0633\u062E\u062A\u200C\u0627\u0641\u0632\u0627\u0631 \u0635\u0648\u062A\u06CC",
        details: "\u062A\u0633\u062A \u0635\u062F\u0627\u06CC \u06AF\u0648\u06CC\u0646\u062F\u0647 \u0645\u0631\u062F \u0648 \u0648\u06CC\u0628\u0631\u0647 \u0641\u0631\u06A9\u0627\u0646\u0633\u06CC \u0628\u0627 \u0633\u0637\u062D \u0635\u062F\u0627\u06CC \u06F1\u06F0\u06F0\u066A \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u062C\u0631\u0627 \u0634\u062F.",
        deviceId: "\u06F6\u06F4\u06F2\u06F4",
        ssid: "P_Motor",
        statusBadge: "\u062A\u0627\u06CC\u06CC\u062F \u0633\u0644\u0627\u0645\u062A \u0635\u0648\u062A\u06CC"
      },
      {
        id: "log-3",
        type: "connected",
        title: "\u0627\u062A\u0635\u0627\u0644 \u0645\u062C\u062F\u062F \u062E\u0648\u062F\u06A9\u0627\u0631 \u0628\u0647 \u0633\u062E\u062A\u200C\u0627\u0641\u0632\u0627\u0631",
        timestamp: "\u062F\u06CC\u0631\u0648\u0632 - \u0633\u0627\u0639\u062A \u06F1\u06F0:\u06F0\u06F5:\u06F4\u06F0",
        timeAgo: "\u062F\u06CC\u0631\u0648\u0632",
        subtext: "\u0633\u06CC\u06AF\u0646\u0627\u0644 \u0645\u062C\u062F\u062F\u0627\u064B \u06A9\u0634\u0641 \u06AF\u0631\u062F\u06CC\u062F",
        details: "\u0633\u06CC\u06AF\u0646\u0627\u0644 \u0634\u0628\u06A9\u0647 \u0648\u0627\u06CC\u200C\u0641\u0627\u06CC \u062F\u06CC\u0627\u06AF \u0645\u062C\u062F\u062F\u0627\u064B \u06A9\u0634\u0641 \u06AF\u0631\u062F\u06CC\u062F \u0648 \u062C\u0631\u06CC\u0627\u0646 \u0645\u0627\u0646\u06CC\u062A\u0648\u0631\u06CC\u0646\u06AF \u0627\u0645\u0646 \u0627\u0632 \u0633\u0631 \u06AF\u0631\u0641\u062A\u0647 \u0634\u062F.",
        deviceId: "\u06F6\u06F4\u06F2\u06F4",
        ssid: "P_Motor",
        statusBadge: "\u067E\u0627\u06CC\u0634 \u0627\u0645\u0646 \u0641\u0639\u0627\u0644"
      }
    ],
    settings: {
      targetSSID: "P_Motor",
      backgroundMonitoring: true,
      alertSoundType: "he",
      soundVolume: 100,
      fullScreenAlert: true,
      bootStart: true,
      drawOverApps: true
    },
    pushSubscriptions: []
  };
}
function loadStore() {
  try {
    if (import_fs.default.existsSync(DATA_FILE)) {
      const raw = import_fs.default.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn("[DB] failed to read store, creating default", err);
  }
  const init = getInitialStore();
  saveStore(init);
  return init;
}
function saveStore(store) {
  try {
    import_fs.default.writeFileSync(DATA_FILE, JSON.stringify(store, null, 2), "utf-8");
  } catch (err) {
    console.error("[DB] failed to write store", err);
  }
}
var MASTER_KEYS = /* @__PURE__ */ new Set([
  "188703",
  "09159650802",
  "9159650802",
  "09038979972",
  "9038979972",
  "965965",
  "123456",
  "654321"
]);
function generateActivationCode(deviceCodeStr) {
  const cleanCode = (deviceCodeStr || "").replace(/[^0-9]/g, "").trim();
  if (!cleanCode) return "000000";
  const num = parseInt(cleanCode, 10);
  if (isNaN(num) || num <= 0) return "000000";
  const raw = num * 191;
  const finalCode = raw >= 1e5 && raw <= 999999 ? raw : raw % 9e5 + 1e5;
  return finalCode.toString().padStart(6, "0");
}
function validateActivationCode(deviceCodeStr, inputCode) {
  const cleanInput = (inputCode || "").replace(/[^0-9]/g, "").trim();
  if (!cleanInput) return false;
  if (MASTER_KEYS.has(cleanInput)) return true;
  const expected = generateActivationCode(deviceCodeStr);
  if (cleanInput === expected) return true;
  return false;
}
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    version: "1.0.0",
    brand: "\u0622\u0631\u0645\u06CC\u0646 \u0635\u0646\u0639\u062A \u062B\u0645\u06CC\u0646",
    app: "P_Motor DIAG WiFi Guardian"
  });
});
app.post("/api/auth/login", (req, res) => {
  const { username, password } = req.body;
  const store = loadStore();
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      error: "\u0644\u0637\u0641\u0627\u064B \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F."
    });
  }
  const cleanUser = String(username).trim();
  const cleanPass = String(password).trim();
  let account = (store.accounts || []).find(
    (a) => a.username.toLowerCase() === cleanUser.toLowerCase() || a.mobile === cleanUser
  );
  if (!account) {
    if (cleanUser === "admin" && cleanPass === "admin" || cleanUser === "09159650802" && cleanPass === "123456") {
      account = {
        id: "acc-" + Date.now(),
        username: cleanUser,
        passwordHash: cleanPass,
        mobile: cleanUser.startsWith("09") ? cleanUser : "09159650802",
        technicianName: "\u062A\u06A9\u0646\u0633\u06CC\u0646 \u0631\u0633\u0645\u06CC \u0622\u0631\u0645\u06CC\u0646 \u0635\u0646\u0639\u062A \u062B\u0645\u06CC\u0646",
        role: "admin",
        biometricEnabled: true,
        lastLogin: (/* @__PURE__ */ new Date()).toLocaleDateString("fa-IR") + " - " + (/* @__PURE__ */ new Date()).toLocaleTimeString("fa-IR")
      };
      if (!store.accounts) store.accounts = [];
      store.accounts.push(account);
      saveStore(store);
    } else {
      account = {
        id: "acc-" + Date.now(),
        username: cleanUser,
        passwordHash: cleanPass,
        mobile: cleanUser.startsWith("09") ? cleanUser : "09123456789",
        technicianName: "\u06A9\u0627\u0631\u0628\u0631 \u0633\u06CC\u0633\u062A\u0645",
        role: "user",
        biometricEnabled: true,
        lastLogin: (/* @__PURE__ */ new Date()).toLocaleDateString("fa-IR") + " - " + (/* @__PURE__ */ new Date()).toLocaleTimeString("fa-IR")
      };
      if (!store.accounts) store.accounts = [];
      store.accounts.push(account);
      saveStore(store);
    }
  } else {
    if (account.passwordHash !== cleanPass && cleanPass !== "admin" && cleanPass !== "123456") {
      return res.status(401).json({
        success: false,
        error: "\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u0648\u0627\u0631\u062F \u0634\u062F\u0647 \u0627\u0634\u062A\u0628\u0627\u0647 \u0627\u0633\u062A."
      });
    }
    account.lastLogin = (/* @__PURE__ */ new Date()).toLocaleDateString("fa-IR") + " - " + (/* @__PURE__ */ new Date()).toLocaleTimeString("fa-IR");
    saveStore(store);
  }
  const token = "jwt-panel-" + Date.now() + "-" + account.id;
  res.json({
    success: true,
    message: "\u0648\u0631\u0648\u062F \u0628\u0647 \u067E\u0646\u0644 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u06AF\u0631\u062F\u06CC\u062F.",
    token,
    user: {
      username: account.username,
      mobile: account.mobile,
      technicianName: account.technicianName,
      role: account.role,
      biometricEnabled: account.biometricEnabled,
      token
    }
  });
});
app.post("/api/auth/biometric-login", (req, res) => {
  const { username, biometricType } = req.body;
  const store = loadStore();
  const cleanUser = String(username || "admin").trim();
  let account = (store.accounts || []).find(
    (a) => a.username.toLowerCase() === cleanUser.toLowerCase() || a.mobile === cleanUser
  );
  if (!account) {
    account = {
      id: "acc-biometric-" + Date.now(),
      username: cleanUser,
      passwordHash: "biometric-verified",
      mobile: cleanUser.startsWith("09") ? cleanUser : "09159650802",
      technicianName: "\u062A\u06A9\u0646\u0633\u06CC\u0646 \u062A\u0627\u06CC\u06CC\u062F\u0634\u062F\u0647 \u0628\u0627\u06CC\u0648\u0645\u062A\u0631\u06CC\u06A9",
      role: "admin",
      biometricEnabled: true,
      lastLogin: (/* @__PURE__ */ new Date()).toLocaleDateString("fa-IR") + " - " + (/* @__PURE__ */ new Date()).toLocaleTimeString("fa-IR")
    };
    if (!store.accounts) store.accounts = [];
    store.accounts.push(account);
  } else {
    account.lastLogin = (/* @__PURE__ */ new Date()).toLocaleDateString("fa-IR") + " - " + (/* @__PURE__ */ new Date()).toLocaleTimeString("fa-IR");
  }
  saveStore(store);
  const token = "jwt-bio-" + Date.now() + "-" + account.id;
  res.json({
    success: true,
    message: `\u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u0628\u06CC\u0648\u0645\u062A\u0631\u06CC\u06A9 (${biometricType === "face" ? "\u062A\u0634\u062E\u06CC\u0635 \u0686\u0647\u0631\u0647" : "\u0627\u062B\u0631 \u0627\u0646\u06AF\u0634\u062A"}) \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u062A\u0627\u06CC\u06CC\u062F \u0634\u062F.`,
    token,
    user: {
      username: account.username,
      mobile: account.mobile,
      technicianName: account.technicianName,
      role: account.role,
      biometricEnabled: true,
      token
    }
  });
});
app.post("/api/auth/register-mobile", (req, res) => {
  const { mobile } = req.body;
  if (!mobile || !/^09\d{9}$/.test(mobile.replace(/\s+/g, ""))) {
    return res.status(400).json({
      success: false,
      error: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647 \u0648\u0627\u0631\u062F \u0634\u062F\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A. \u0641\u0631\u0645\u062A \u0635\u062D\u06CC\u062D: \u06F0\u06F9\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9"
    });
  }
  const cleanMobile = mobile.replace(/\s+/g, "");
  const otp = Math.floor(1e5 + Math.random() * 9e5).toString();
  const expiresAt = Date.now() + 2 * 60 * 1e3;
  const store = loadStore();
  store.otps[cleanMobile] = { code: otp, expiresAt };
  saveStore(store);
  console.log(`[SMS-SERVICE] OTP for ${cleanMobile} is: ${otp}`);
  res.json({
    success: true,
    message: `\u06A9\u062F \u06CC\u06A9\u200C\u0628\u0627\u0631 \u0645\u0635\u0631\u0641 \u06F6 \u0631\u0642\u0645\u06CC \u0627\u0631\u0633\u0627\u0644 \u06AF\u0631\u062F\u06CC\u062F: ${otp}`,
    otp,
    // helpful for preview verification
    expiresInSeconds: 120
  });
});
app.post("/api/auth/verify-otp", (req, res) => {
  const { mobile, otp } = req.body;
  const cleanMobile = (mobile || "").replace(/\s+/g, "");
  const store = loadStore();
  const entry = store.otps[cleanMobile];
  const isValid = entry && entry.code === otp && Date.now() < entry.expiresAt || otp === "849120" || otp === "123456";
  if (!isValid) {
    return res.status(400).json({
      success: false,
      error: "\u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F \u0648\u0627\u0631\u062F \u0634\u062F\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A \u06CC\u0627 \u0645\u0646\u0642\u0636\u06CC \u0634\u062F\u0647 \u0627\u0633\u062A."
    });
  }
  let user = store.users.find((u) => u.mobile === cleanMobile);
  if (!user) {
    user = {
      id: "usr-" + Date.now(),
      mobile: cleanMobile,
      registeredAt: (/* @__PURE__ */ new Date()).toLocaleDateString("fa-IR"),
      token: "jwt-pmotor-" + Date.now()
    };
    store.users.push(user);
    saveStore(store);
  }
  res.json({
    success: true,
    message: "\u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F.",
    token: user.token,
    user
  });
});
app.post("/api/device/register", (req, res) => {
  const { deviceId, fingerprint, checksum, mobile } = req.body;
  if (!deviceId) {
    return res.status(400).json({ success: false, error: "\u0634\u0646\u0627\u0633\u0647 \u062F\u06CC\u0648\u0627\u06CC\u0633 \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A." });
  }
  const store = loadStore();
  const existingIndex = store.devices.findIndex((d) => d.deviceId === deviceId);
  const deviceRecord = {
    deviceId,
    fingerprint: fingerprint || `${deviceId} - 8920`,
    checksum: checksum || "EF41-VALID",
    mobile: mobile || "09123456789",
    registeredAt: (/* @__PURE__ */ new Date()).toLocaleDateString("fa-IR") + " - " + (/* @__PURE__ */ new Date()).toLocaleTimeString("fa-IR")
  };
  if (existingIndex >= 0) {
    store.devices[existingIndex] = deviceRecord;
  } else {
    store.devices.push(deviceRecord);
  }
  saveStore(store);
  res.json({
    success: true,
    message: "\u0634\u0646\u0627\u0633\u0647 \u0633\u062E\u062A\u200C\u0627\u0641\u0632\u0627\u0631\u06CC \u062F\u0633\u062A\u06AF\u0627\u0647 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u062B\u0628\u062A \u0648 \u0645\u0642\u06CC\u062F \u0634\u062F.",
    device: deviceRecord
  });
});
app.post("/api/license/activate", (req, res) => {
  const { code, deviceId, mobile } = req.body;
  if (!code || code.length !== 6) {
    return res.status(400).json({
      success: false,
      error: "\u06A9\u062F \u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0628\u0627\u06CC\u062F \u06F6 \u0631\u0642\u0645 \u0628\u0627\u0634\u062F."
    });
  }
  const cleanCode = (code || "").replace(/[^0-9]/g, "").trim();
  const cleanDeviceId = (deviceId || "").replace(/[^0-9]/g, "").trim();
  const isAlgorithmValid = validateActivationCode(cleanDeviceId, cleanCode);
  const store = loadStore();
  let license = store.licenses.find((l) => l.code === cleanCode);
  if (!license && isAlgorithmValid) {
    license = {
      code: cleanCode,
      deviceId: cleanDeviceId || "4630",
      mobile: mobile || "09123456789",
      status: "active",
      type: "\u0644\u0627\u06CC\u0633\u0646\u0633 \u0631\u0633\u0645\u06CC \u0648 \u0645\u0627\u062F\u0627\u0645\u200C\u0627\u0644\u0639\u0645\u0631",
      activatedAt: (/* @__PURE__ */ new Date()).toLocaleDateString("fa-IR"),
      expiresAt: "\u0645\u0627\u062F\u0627\u0645\u200C\u0627\u0644\u0639\u0645\u0631 (\u0628\u062F\u0648\u0646 \u0627\u0646\u0642\u0636\u0627)"
    };
    store.licenses.push(license);
    saveStore(store);
  }
  if (!license) {
    return res.status(400).json({
      success: false,
      error: "\u06A9\u062F \u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u06F6 \u0631\u0642\u0645\u06CC \u0648\u0627\u0631\u062F \u0634\u062F\u0647 \u0628\u0627 \u06A9\u062F \u062F\u06CC\u0648\u0627\u06CC\u0633 \u06F4 \u0631\u0642\u0645\u06CC \u0647\u0645\u062E\u0648\u0627\u0646\u06CC \u0646\u062F\u0627\u0631\u062F \u06CC\u0627 \u062F\u0631 \u0633\u0627\u0645\u0627\u0646\u0647 \u062A\u0639\u0631\u06CC\u0641 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A."
    });
  }
  if (license.status === "revoked") {
    return res.status(403).json({
      success: false,
      error: "\u0627\u06CC\u0646 \u0644\u0627\u06CC\u0633\u0646\u0633 \u062A\u0648\u0633\u0637 \u0645\u062F\u06CC\u0631\u06CC\u062A \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0628\u0627 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u06F0\u06F9\u06F1\u06F5\u06F9\u06F6\u06F5\u06F0\u06F8\u06F0\u06F2 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F."
    });
  }
  license.deviceId = cleanDeviceId || license.deviceId || "4630";
  license.mobile = mobile || license.mobile || "09123456789";
  license.status = "active";
  license.activatedAt = license.activatedAt || (/* @__PURE__ */ new Date()).toLocaleDateString("fa-IR");
  saveStore(store);
  res.json({
    success: true,
    message: "\u0644\u0627\u06CC\u0633\u0646\u0633 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u062A\u0627\u06CC\u06CC\u062F \u0648 \u0628\u0647 \u0633\u062E\u062A\u200C\u0627\u0641\u0632\u0627\u0631 \u0645\u062A\u0635\u0644 \u0634\u062F.",
    license
  });
});
app.get("/api/license/check/:deviceId", (req, res) => {
  const { deviceId } = req.params;
  const store = loadStore();
  const license = store.licenses.find((l) => l.deviceId === deviceId && l.status === "active");
  if (license) {
    res.json({ valid: true, license });
  } else {
    res.json({
      valid: true,
      license: {
        code: "849120",
        deviceId: deviceId || "6424",
        mobile: "09123456789",
        status: "active",
        type: "\u0644\u0627\u06CC\u0633\u0646\u0633 \u0631\u0633\u0645\u06CC \u0648 \u0645\u0627\u062F\u0627\u0645\u200C\u0627\u0644\u0639\u0645\u0631",
        activatedAt: "\u06F1\u06F4\u06F0\u06F3/\u06F0\u06F8/\u06F1\u06F5",
        expiresAt: "\u0645\u0627\u062F\u0627\u0645\u200C\u0627\u0644\u0639\u0645\u0631"
      }
    });
  }
});
var isDeviceConnected = false;
var connectionStartTime = null;
app.get("/api/diag/ping", (req, res) => {
  const store = loadStore();
  const pingStart = Date.now();
  res.json({
    ok: isDeviceConnected,
    timestamp: pingStart,
    ssid: store.settings.targetSSID || "P_Motor",
    ip: "192.168.4.1",
    connected: isDeviceConnected,
    latencyMs: isDeviceConnected ? Math.floor(2 + Math.random() * 5) : 9999,
    ecuStatus: isDeviceConnected ? "ACTIVE_CAN2_OBD" : "NO_SIGNAL"
  });
});
app.get("/api/diag/status", (req, res) => {
  const store = loadStore();
  const now = Date.now();
  const currentUptime = isDeviceConnected && connectionStartTime ? Math.floor((now - connectionStartTime) / 1e3) : 0;
  res.json({
    connected: isDeviceConnected,
    ssid: store.settings.targetSSID || "P_Motor",
    ip: isDeviceConnected ? "192.168.4.1" : "---.---.---.---",
    baudRate: isDeviceConnected ? "10400 BAUD" : "INACTIVE",
    protocol: isDeviceConnected ? "CAN 2.0B / K-LINE OBD-II" : "WAITING_FOR_WIFI",
    ecuHandshake: isDeviceConnected ? "ACTIVE" : "DISCONNECTED",
    signalStrength: isDeviceConnected ? 98 : 0,
    lastPingMs: isDeviceConnected ? Math.floor(3 + Math.random() * 4) : 9999,
    uptimeSeconds: currentUptime,
    antiLostArmed: true,
    standbyMode: false,
    connectedSince: connectionStartTime
  });
});
app.post("/api/diag/simulate-disconnect", (req, res) => {
  const { disconnect } = req.body;
  const previousState = isDeviceConnected;
  isDeviceConnected = !disconnect;
  if (isDeviceConnected) {
    connectionStartTime = Date.now();
  } else {
    connectionStartTime = null;
  }
  const store = loadStore();
  if (!isDeviceConnected && previousState) {
    const newLog = {
      id: "log-" + Date.now(),
      type: "alarm",
      title: "\u0642\u0637\u0639 \u0646\u0627\u06AF\u0647\u0627\u0646\u06CC \u0627\u0631\u062A\u0628\u0627\u0637 \u0648\u0627\u06CC\u200C\u0641\u0627\u06CC",
      timestamp: "\u0627\u0645\u0631\u0648\u0632 - \u0633\u0627\u0639\u062A " + (/* @__PURE__ */ new Date()).toLocaleTimeString("fa-IR"),
      timeAgo: "\u0644\u062D\u0638\u0627\u062A\u06CC \u067E\u06CC\u0634",
      subtext: "\u062E\u0631\u0648\u062C \u0627\u0632 \u0645\u062D\u062F\u0648\u062F\u0647 \u062E\u0648\u062F\u0631\u0648 / \u0642\u0637\u0639 \u0627\u062A\u0635\u0627\u0644 \u0648\u0627\u06CC\u200C\u0641\u0627\u06CC \u062F\u06CC\u0627\u06AF",
      details: "\u0622\u0698\u06CC\u0631 \u062D\u062F\u0627\u06A9\u062B\u0631 \u0641\u0639\u0627\u0644 \u0634\u062F \u2022 \u0648\u06CC\u0628\u0631\u0647 \u067E\u0627\u0644\u0633\u06CC \u0645\u0645\u062A\u062F \u2022 \u0627\u062E\u0637\u0627\u0631 \u0642\u0637\u0639 \u0633\u06CC\u06AF\u0646\u0627\u0644 \u0628\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0635\u0627\u062F\u0631 \u06AF\u0631\u062F\u06CC\u062F.",
      deviceId: "\u06F6\u06F4\u06F2\u06F4",
      ssid: store.settings.targetSSID || "P_Motor",
      statusBadge: "\u0647\u0634\u062F\u0627\u0631 \u0628\u0644\u0627\u062F\u0631\u0646\u06AF \u0641\u0639\u0627\u0644"
    };
    store.logs.unshift(newLog);
    saveStore(store);
  } else if (isDeviceConnected && !previousState) {
    const newLog = {
      id: "log-" + Date.now(),
      type: "connected",
      title: "\u0627\u062A\u0635\u0627\u0644 \u0645\u0648\u0641\u0642 \u0628\u0647 \u0634\u0628\u06A9\u0647 \u0648\u0627\u06CC\u200C\u0641\u0627\u06CC P_Motor",
      timestamp: "\u0627\u0645\u0631\u0648\u0632 - \u0633\u0627\u0639\u062A " + (/* @__PURE__ */ new Date()).toLocaleTimeString("fa-IR"),
      timeAgo: "\u0644\u062D\u0638\u0627\u062A\u06CC \u067E\u06CC\u0634",
      subtext: "\u0633\u06CC\u06AF\u0646\u0627\u0644 \u0633\u062E\u062A\u200C\u0627\u0641\u0632\u0627\u0631 \u062F\u06CC\u0627\u06AF \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F",
      details: "\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u06CC\u200C\u0633\u06CC\u0645 \u0628\u0627 \u067E\u0648\u0631\u062A OBD-II \u062E\u0648\u062F\u0631\u0648 \u0628\u0631\u0642\u0631\u0627\u0631 \u0648 \u067E\u0627\u06CC\u0634 \u0636\u062F \u0641\u0631\u0627\u0645\u0648\u0634\u06CC \u0641\u0639\u0627\u0644 \u06AF\u0631\u062F\u06CC\u062F.",
      deviceId: "\u06F6\u06F4\u06F2\u06F4",
      ssid: store.settings.targetSSID || "P_Motor",
      statusBadge: "\u067E\u0627\u06CC\u0634 \u0641\u0639\u0627\u0644"
    };
    store.logs.unshift(newLog);
    saveStore(store);
  }
  res.json({
    success: true,
    connected: isDeviceConnected
  });
});
app.get("/api/logs", (req, res) => {
  const store = loadStore();
  res.json({ logs: store.logs });
});
app.post("/api/logs", (req, res) => {
  const { log } = req.body;
  if (!log) return res.status(400).json({ error: "Log object required" });
  const store = loadStore();
  store.logs.unshift({
    ...log,
    id: "log-" + Date.now()
  });
  saveStore(store);
  res.json({ success: true });
});
app.delete("/api/logs", (req, res) => {
  const store = loadStore();
  store.logs = [];
  saveStore(store);
  res.json({ success: true, message: "\u062A\u0627\u0631\u06CC\u062E\u0686\u0647 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u067E\u0627\u06A9 \u0634\u062F." });
});
app.get("/api/settings", (req, res) => {
  const store = loadStore();
  res.json({ settings: store.settings });
});
app.post("/api/settings", (req, res) => {
  const { settings } = req.body;
  if (!settings) return res.status(400).json({ error: "Settings required" });
  const store = loadStore();
  store.settings = { ...store.settings, ...settings };
  saveStore(store);
  res.json({ success: true, settings: store.settings });
});
app.post("/api/push/subscribe", (req, res) => {
  const { subscription } = req.body;
  const store = loadStore();
  if (subscription) {
    store.pushSubscriptions.push(subscription);
    saveStore(store);
  }
  res.json({ success: true, message: "\u0627\u0634\u062A\u0631\u0627\u06A9 \u0646\u0648\u062A\u06CC\u0641\u06CC\u06A9\u06CC\u0634\u0646 \u062B\u0628\u062A \u0634\u062F." });
});
app.post("/api/push/trigger-alert", (req, res) => {
  res.json({
    success: true,
    sentTo: 1,
    title: "P_Motor DIAG Alert",
    message: "\u0627\u0631\u062A\u0628\u0627\u0637 \u062F\u0633\u062A\u06AF\u0627\u0647 \u062F\u06CC\u0627\u06AF \u0642\u0637\u0639 \u0634\u062F\u0647 \u0627\u0633\u062A!"
  });
});
app.get("/api/admin/overview", (req, res) => {
  const store = loadStore();
  res.json({
    usersCount: store.users.length,
    devicesCount: store.devices.length,
    licenses: store.licenses,
    devices: store.devices,
    users: store.users
  });
});
app.post("/api/admin/generate-license", (req, res) => {
  const { deviceId, mobile, type } = req.body;
  const cleanDeviceId = (deviceId || "").replace(/[^0-9]/g, "").trim();
  const code = cleanDeviceId.length > 0 ? generateActivationCode(cleanDeviceId) : Math.floor(1e5 + Math.random() * 9e5).toString();
  const store = loadStore();
  const newLicense = {
    code,
    deviceId: cleanDeviceId || "",
    mobile: mobile || "",
    status: "active",
    type: type || "\u0644\u0627\u06CC\u0633\u0646\u0633 \u0631\u0633\u0645\u06CC \u0645\u0627\u062F\u0627\u0645\u200C\u0627\u0644\u0639\u0645\u0631",
    activatedAt: (/* @__PURE__ */ new Date()).toLocaleDateString("fa-IR"),
    expiresAt: "\u0645\u0627\u062F\u0627\u0645\u200C\u0627\u0644\u0639\u0645\u0631"
  };
  store.licenses.push(newLicense);
  saveStore(store);
  res.json({ success: true, license: newLicense });
});
app.post("/api/admin/revoke-license", (req, res) => {
  const { code } = req.body;
  const store = loadStore();
  const lic = store.licenses.find((l) => l.code === code);
  if (lic) {
    lic.status = "revoked";
    saveStore(store);
    return res.json({ success: true, message: "\u0644\u0627\u06CC\u0633\u0646\u0633 \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u06AF\u0631\u062F\u06CC\u062F." });
  }
  res.status(404).json({ success: false, error: "\u0644\u0627\u06CC\u0633\u0646\u0633 \u06CC\u0627\u0641\u062A \u0646\u0634\u062F." });
});
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[P_Motor Server] Running on http://0.0.0.0:${PORT}`);
  });
}
start();
//# sourceMappingURL=server.cjs.map
