// test.js
console.log("🔍 Running test...");

const result = 2 + 2;

if (result === 4) {
  console.log("✅ Test passed: 2 + 2 is 4");
  process.exit(0); // success
} else {
  console.log("❌ Test failed: 2 + 2 is not 4");
  process.exit(1); // fail
}
