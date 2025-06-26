console.log("🔍 Running test...");

const result = 5 + 5;

if (result === 10) {
  console.log("✅ Test passed: 5 + 5 is 10");
  process.exit(0); // Success
} else {
  console.log("❌ Test failed: 5 + 5 is not 10");
  process.exit(1); // Failure
}
