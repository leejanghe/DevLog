## git workflow

깃은 협업할때 필수적이다. 깃을 모르면 협업 할 때 매우 난감한 상황이 온다. 오늘은 깃 워크플로우를 간단하게 정리해보자!

<br />

## workflow

우선 협업하는 상황을 텍스트로 정리해보면

1. 구현해야 하는 기능 별로 브랜치를 생성한다.
2. 생성한 브랜치 내에서 진행한 작업들을 `git add .` , `git commit`한다.
3. 로컬에서만 작업하면 다른분들과 공유가 안되니 원격 저장소에 Push한다.
4. 기능구현이 완료 되면 마스터 브랜치에 Merge Request를 보낸다.
5. 동료분의 코드 리뷰가 끝나고 이상이 없으면 마스터 브랜치에 내 작업물이 Merge 된다.

이것을 다시 깃 명령어로 정리해보자!

<br />

```js
git checkout -b feature/issues#1-Login-Page
//브랜치를 생성하고 해당 브랜치로 이동할거에요. 이 브랜치는 첫번째 이슈이며 로그인 기능을 하는 페이지를 만들거에요.

git add .
// 모든 변경사항을 tracking 되는 상태로 변경할거에요.

git commit -m “ENH: Add Input Form for Login”
// 이번 작업은 로그인을 위한 폼을 만든 거에요. 커밋 할게요!

git push -set-upstream origin feature/issues#1-Login-Page
//내가 작업하고 있는 브랜치를 동료들도 볼 수 있게 원격에 올릴게요

push하면 gitlab/github에 Pull Request나 Merge Request 생성하는 버튼이 활성화
// (메신저로) @동료님 저 이번에 로그인 페이지 작업했고 해당 작업 사항 MR(PR) 올렸습니다! 피드백 부탁드립니다! 감사합니다~
```

[참고자료](https://medium.com/@_diana_lee/github-gitlab%EC%9C%BC%EB%A1%9C-%ED%98%91%EC%97%85%ED%95%98%EB%8A%94-%ED%95%9C%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95-feature-branch-workflow-9034441cf285)