## git

깃은 다양한 저장소를 사용하는 프로젝트를 위한 프로그램이다. 항상 자주 쓰는 명령어만 사용했기에 깃에 대해 좀 더 깊게 공부해야 겠다.

<br />

### git 기본

```js
git pull
// 원격에서 저장소를 가져온다.

git commit 
// 커밋 , 내용 저장

git branch
// 브런치 확인

git switch
// 브런치 선택

git switch -c
// 브런치 선택 후 해당 브런치 이동

git push
// 저장소에 저장
```

솔직히 이것만 알아도 충분히 깃 사용에 문제가 없다. 하지만 점점 버전관리 할게 많아지고 팁과 협업 하는 상황이라면 깃에 대해 좀 더 자세히 알 필요가 있다. 깃 충돌 방지, 깃 풀, 깃 브런치 확인유무등 매우 중요한 점이 있다.

<br />

### 예제
bugFix라는 새 브랜치를 만듭니다
git checkout bugFix를 입력해 bugFix 브랜치로 이동(checkout)합니다.
커밋 한 번 하세요
git checkout 명령어를 이용해 main브랜치로 돌아갑니다
커밋 또 하세요
git merge 명령어로 bugFix브랜치를 main에 합쳐 넣습니다.

```js
git checkout bugFix
git commit
git checkout main
git commit
git merge bugFix

// 다른방법
git bracnh  // 브랜치 리스트 보기
git switch -c // 브랜치 선택 후 커밋
git switch main // 브랜치 선택
git commit
git merge bugFix // 브런치 머지
```

개인적으로 checkout 명령어 보다 switch가 더 편하다...

<br />

## git 연습하기 좋은 사이트

아래사이트에서 공부하자 깃에 대한 다양한 기능을 소개해준다. 공부하면서 느낀건 다양한 명령어가 있지만 결국 쓰는 명령어만 쓰기 때문에 위에 정리한 명령어만 잘 숙지하고 실제로 레포를 만들어서 연습 해보자!

[git공부](https://learngitbranching.js.org/?locale=ko)