/**
 * Author: Mary Kuchumova
 * Date: 19-Jul-16
 * Time: 10:04 PM
 */

export class PasswordCheckerService {
  private CHARACTER_MULTIPLIER = 4;
  private DIGIT_MULTIPLIER = 4;
  private SYMBOL_MULTIPLIER = 6;
  private MIDDLE_NUMBERSYMBOL_MULTIPLIER = 2;
  private CONSECUTIVE_3_LETTERS_MULTIPLIER = -3;
  private CONSECUTIVE_3_DIGIT_MULTIPLIER = -3;
  private CONSECUTIVE_3_SYMBOL_MULTIPLIER = -3;
  private REPEAT_CHARACTER_MULTIPLIER = -1;

  measurePasswordStrength(password: string){
    return PasswordCheckerService.countCharacterNumber(password) * this.CHARACTER_MULTIPLIER
      + PasswordCheckerService.countDigitNumber(password) * this.DIGIT_MULTIPLIER
      + PasswordCheckerService.countSymbols(password) * this.SYMBOL_MULTIPLIER
      + PasswordCheckerService.countMiddleNumberSymbol(password) * this.MIDDLE_NUMBERSYMBOL_MULTIPLIER
      + PasswordCheckerService.countRepeatCharacters(password) * this.REPEAT_CHARACTER_MULTIPLIER
      + PasswordCheckerService.countSequentialSymbols(password) * this.CONSECUTIVE_3_SYMBOL_MULTIPLIER
      + PasswordCheckerService.countSequentialLetters(password) * this.CONSECUTIVE_3_LETTERS_MULTIPLIER
      + PasswordCheckerService.countSequentialDigits(password) * this.CONSECUTIVE_3_DIGIT_MULTIPLIER;
  }

  private static countSequentialDigits(password:string) {
    var count = 0;
    var streak = 0;
    for (var i=0; i<password.length; i++){
      if(/[0-9]/.test(password[i])){
        streak++;
      } else {
        if(streak >= 3) {
          count += streak;
        }
        streak = 0;
      }
    }
    if(streak >= 3) {
      count +=streak;
    }
    return count;
  }

  private static countSequentialLetters(password:string) {
    var count = 0;
    var streak = 0;
    for (var i=0; i<password.length; i++){
      if(/[a-zA-Z]/.test(password[i])){
        streak++;
      } else {
        if(streak >= 3) {
          count += streak;
        }
        streak = 0;
      }
    }
    if(streak >= 3) {
      count +=streak;
    }
    return count;
  }

  private static countSequentialSymbols(password:string) {
    var count = 0;
    var streak = 0;
    for (var i=0; i<password.length; i++){
      if(/[!@#$%^&*()~/\-+=}\{]/.test(password[i])){
        streak++;
      } else {
        if(streak >= 3) {
          count += streak;
        }
        streak = 0;
      }
    }
    if(streak >= 3) {
      count +=streak;
    }
    return count;
  }

  private static countRepeatCharacters(password:string) {
    var count = 0;
    for (var i=1; i<password.length; i++){
      if(password[i] === password[i-1]) {
        count ++;
      }
    }
    return count;
  }

  private static countMiddleNumberSymbol(password:string) {
    var count = 0;
    for (var i=1; i<password.length - 1; i++){
      if(/[!@#$%^&*()~/\-+=}\{0-9]/.test(password[i])){
        count++;
      }
    }
    return count;
  }

  private static countSymbols(password:string) {
    var count = 0;
    for (var i=0; i<password.length; i++){
      if(/[!@#$%^&*()~/\-+=}\{]/.test(password[i])){
        count++;
      }
    }
    return count;
  }

  private static countDigitNumber(password:string) {
    var count = 0;
    for (var i=0; i<password.length; i++){
      if(/[0-9]/.test(password[i])){
        count++;
      }
    }
    return count;
  }

  private static countCharacterNumber(password:string) {
    var count = 0;
    for (var i=0; i<password.length; i++){
      if(/[A-Za-z]/.test(password[i])){
        count++;
      }
    }
    return count;
  }
  
}
