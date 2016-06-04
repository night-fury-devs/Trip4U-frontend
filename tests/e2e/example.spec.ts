describe('main page tests', () => {
   it('should find Aloha:)', () => {
       browser.get(browser.baseUrl);
       browser.waitForAngular();
       
       var myapp = element(by.tagName('my-app'));
       
       expect(myapp.getInnerHtml()).toEqual('<h1>Aloha :)</h1>');
   }) 
});