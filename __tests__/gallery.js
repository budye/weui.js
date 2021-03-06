describe('gallery', function(){
    const url = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
    let called = false;
    before(() => {
        weui.gallery(url, {
            onDelete: function(){
                called = true;
            }
        });
    });

    it('should render gallery', () => {
        const $img = $('.weui-gallery__img');
        assert($('.weui-gallery').length === 1);
        assert($img.length === 1);
        assert($img.attr('style').match(/\((.*?)\)/)[1] === url);
    });

    it('test mask click', (done) => {
        $('.weui-gallery__img').click();

        setTimeout(() => {
            assert($('.weui-gallery').length === 0);
            assert(!called);

            done();
        }, closeDur);
    });

    it('test delBtn click', (done) => {
        const gallery = weui.gallery(url, {
            onDelete: function(){
                called = true;
            }
        });
        $('.weui-gallery__del').click();

        setTimeout(() => {
            gallery.hide();
            assert(called);

            done();
        }, closeDur);
    });
});
