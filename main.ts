import { Singleton } from "./singleton";

function main(): void {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  console.log("=== 1. 동일 인스턴스 참조 비교 ===");
  console.log(`s1 === s2 결과: ${s1 === s2}`);

  console.log("\n=== 2. 상태 공유 확인 ===");
  console.log(`초기 s1 count: ${s1.getCount()}, s2 count: ${s2.getCount()}`);

  s1.increment();
  s1.increment();
  console.log("-> s1.increment() 2회 실행");

  console.log(`변경 후 s1 count: ${s1.getCount()}`);
  console.log(`변경 후 s2 count: ${s2.getCount()}`);
}

main();