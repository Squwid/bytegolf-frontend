import { BasicSubmission } from "../Types";

export const BASIC_MY_SUBMISSIONS: BasicSubmission[] = [
  {
    ID: 'dd451558-575e-47d3-a3fc-a09a5f964089',
    Score: 21,
    Language: 'golang',
    BGID: 'bef99408',
    GitName: 'Squwid',
    HoleID: 'fake',
    Correct: false,
    Script: `package main
import "fmt"

func main() {
  fmt.Println("Hello, world!")
}`,
  HoleName: 'Print Hello, World using Golang'
  }, 
  {
    ID: '55e2e285-2491-4898-bf49-d4bbd22297be',
    Score: 45,
    Language: 'python3',
    BGID: 'bef99408',
    GitName: 'Squwid',
    HoleID: 'fake',
    Correct: true,
    Script: `
    print('hello, world!')
    `,
    HoleName: 'This is a Fake Hole, Maybe a Longer Name'
  },
  {
    ID: '2b7b97f8-94f7-43e1-a6ef-650347eb2262',
    Score: 85,
    Language: 'javascript',
    BGID: 'bef99408',
    GitName: 'Squwid',
    HoleID: 'fake',
    Correct: false,
    Script: `console.log('hello, world!')`,
    HoleName: 'Print "Hello, world!" using python'
  },
  {
    ID: 'e58a80f1-d9e3-44b3-883e-b8c1e4af271d',
    Score: 4800,
    Language: 'maybealongerlang',
    BGID: 'bef99408',
    GitName: 'Squwid',
    HoleID: 'fake',
    Correct: true,
    Script: `
    fadsf
    asdf
    asdf
    asdf
    asdf
    asdf
    asdf
    a
    dfa
    dsfa
    sdf
    d
    
    
    
    adfkjalksdfj alksdjf alksdjflaksdjfaksdfja;lsdkfja;slkdfjal;ifkejalk;jdfjasl;kdfjas;lkdfjas;lkdjfa;lskdfja;slkdfja;lskdfja;lskdjfa;lksdfja;lskdjfa;lksdfja;ligha;lkjsdgh
    asd
    fa
    sdf
    asdf
    as
    dfa
    sdf
    a
    sdf
    asd
    fa
    sdfas
    df
    asd
    fsd
    f
    adfkasdjkfal;ksdjfal;ksdjfalieurpoiu3oi4u3lk4m3l;4242
    a
    
    
    
    asdfasdfkaldkjsflaksdf`,
    HoleName: 'Longest Submission Name'
  },
  {
    ID: '4e79bace-72ad-4771-8cee-b5d585ff8726',
    Score: 8911,
    Language: 'c++',
    BGID: 'bef99408',
    GitName: 'Squwid',
    HoleID: 'fake',
    Correct: false,
    Script: 'short',
    HoleName: 'This is a Full Hole Name'
  }
];