type UpperCaseCharacter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y'
  | 'Z'

type LowerCaseCharacter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'

type NumericCharacter = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

export type ValidateUpperSnakeCase<T extends string, U = T> = T extends UpperCaseCharacter | '_' ? U : T extends `${UpperCaseCharacter | '_'}${infer V}` ? ValidateUpperSnakeCase<V, U> : never

export type ValidateCamelCase<T extends String, IsFirst = true, U = T> =
  IsFirst extends true ?
  T extends LowerCaseCharacter
  ? U
  : T extends `${LowerCaseCharacter}${infer V}`
  ? ValidateCamelCase<V, false, U>
  : never
  : T extends LowerCaseCharacter | UpperCaseCharacter | NumericCharacter ?
  U : T extends `${LowerCaseCharacter | UpperCaseCharacter | NumericCharacter}${infer V}` ? ValidateCamelCase<V, false, U> : never
