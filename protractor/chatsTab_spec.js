describe('Testing the chats tab', function() {
	beforeEach(function(done) {
		browser.ignoreSynchronization = true;
		done();
	});
    it('should Have Tabs', function(done) {
       var tabs = element.all(by.css('ion-tab'));
       expect(tabs.count()).toBe(3);
       expect(tabs.get(0).getAttribute('href')).toBe('#/tab/dash');
       expect(tabs.get(1).getAttribute('href')).toBe('#/tab/chats');
       expect(tabs.get(2).getAttribute('href')).toBe('#/tab/account');
       done(); 
    });

    it('should Go to Chats and have Chats', function(done) {
       var navs = element.all(by.css('.tab-item'));
       expect(navs.count()).toBe(3);
       expect(navs.get(1).getText()).toBe('Chats');
       navs.get(1).click();
       browser.sleep(3000);
       expect(browser.getTitle()).toEqual('Chats');
       var chats = element.all(by.css('.item-avatar'));
       expect(chats.count()).toBe(5);
       expect(chats.get(0).getAttribute('href')).toBe('#/tab/chats/0');
       expect(chats.get(0).element(by.css('h2')).getText()).toBe('Ben Sparrow');
       expect(chats.get(0).element(by.css('p')).getText()).toBe('You on your way?')
       done(); 
    });

});
