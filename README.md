-선택한 언어: TypeScript
-실행 환경(버전): Node.js v24.21.0
-실행 방법: npm install 후 npx tsx main.ts

-실행결과

=== 1. 동일 인스턴스 참조 비교 ===
s1 === s2 결과: true

=== 2. 상태 공유 확인 ===
초기 s1 count: 0, s2 count: 0
-> s1.increment() 2회 실행
변경 후 s1 count: 2
변경 후 s2 count: 2


-인스턴스 보관 위치, 반복 요청 시 새 객체가 안 만들어지는 이유, 동일 인스턴스 공유 근거 

인스턴스는 Singleton 클래스의 정적 변수(private static instance)에 보관된다.
getInstance() 호출 시 instance가 null인 최초 1회에만 객체 생성을 하고, 반복 요청에는 이미 저장된 instance를 그대로 반환해 새 객체가 안 만들어진다.
실행 결과 s1 === s2가 true로 출력되고, s1에서 증가시킨 count 값이 s2에서도 같이 증가하여 2로 출력되기 떄문에 두 변수가 하나의 인스턴스를 공유한다는 근거가 된다. 