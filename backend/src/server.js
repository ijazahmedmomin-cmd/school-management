// Save original console functions before anything else
const originalLog = console.log;
const originalError = console.error;

// Trap console.log reassignments
Object.defineProperty(console, "log", {
  configurable: true,
  get() {
    return originalLog; // always return original log
  },
  set(newFn) {
    originalError("🛑 DETECTED console.log override:", newFn);
    originalError(new Error("console.log was overridden!").stack);

    // Allow override, but still keep originalLog safe
    Object.defineProperty(console, "log", {
      value: newFn,
      writable: true,
      configurable: true
    });
  }
});

// Trap console.error reassignments too
Object.defineProperty(console, "error", {
  configurable: true,
  get() {
    return originalError;
  },
  set(newFn) {
    originalError("🛑 DETECTED console.error override:", newFn);
    originalError(new Error("console.error was overridden!").stack);

    Object.defineProperty(console, "error", {
      value: newFn,
      writable: true,
      configurable: true
    });
  }
});


const { app } = require("./app.js");
const { env } = require("./config");
const { logEnvConfig } = require("./utils/logEnv");
const PORT = env.PORT;

logEnvConfig();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);                                                                                                            
});
