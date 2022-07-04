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

<br />

# 깃 관련 추가적으로 알게 된점 기록하기!

## 브런치 깔끔하게 삭제 하는 방법

나의 로컬에서 아래 명령어로 제거할 수 있다.
```
git branch -d 브랜치명
```
삭제 후 원격 저장소에서도 삭제하려면 아래 명령어!
```
git push -d origin 삭제한 브랜치명
```
삭제가 잘 되었는지 목록을 확인해준다.
```
git branch -al
```
삭제해도 브런치가 보인다면 아래 명령어를 통해 동기화 하기!
```
git fetch --all --prune
```

## dquote> 나가는방법

깃 커밋 도중 실수로 따움표를 못붙여서 dquote> 생긴 경우가 있다. 이럴경우 다시 터미널을 키고 했는데 그럴 필요가 없었다.
그냥 컨트롤 G 누르면 해결 된다! 참고하자!

<br />

## error: failed to push some refs to '주소'

협업할때 이런 에러가 뜰 경우가 있음. 이유는 깃 충돌을 방지하기 위해서이다. 이 에러를 해결하기 위해선 그냥 땡겨오면 된다.
만약 지금 작업하고 있는 브런치가 front이면 아래와 같이 명령어 입력

```
git pull origin front
```

땡겨오고 깃 커밋 푸쉬 하면 끝!

<br />

## 깃 설정하기

우선 아래 명령어를 쳐서 깃 정보를 확인한다.

```
git config --list
```

확인후 자신의 정보가 아니면 아이디와 이메일을 아래 명령어로 통해 삭제한다.

```
git config --global --unset user.name
git config --global --unset user.email
```

잘삭제 되었는지 다시 첫번째와 같이 리스트를 확인 후 자기 깃 이메일과 아이디를 아래 명령어로 통해 설정한다.

```
git config --global user.name "Your Name"
git config --global user.email you@example.com
```

설정한후 다시 리스트를 확인하면 내아이디와 이메일이 나온다!


