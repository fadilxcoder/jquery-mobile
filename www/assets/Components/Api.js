class Api
{
    // Api BASE URL
    version = ''
    url = 'https://json-server-fake-api.glitch.me/' + this.version;

    // Api endpoints
    routes = {
        'ARTICLES' : this.url + 'articles',
        'USERS' : this.url + 'users'
    };

    constructor() {
        this.init();
    }

    init() {
        if ($('#home-page').length > 0) {
            this.getArticles();
            this.showArticleContentPopUp();
        }

        if ($('#user-page').length > 0) {
            this.getUsers();
            this.showUserContentPopUp();
        }
    }

    getArticles() {
        var thisObj = this;
        $.ajax({
            dataType : 'json',
            url      : thisObj.routes.ARTICLES,
            cache    : false,
            type     : 'GET',
            success  : function (data) {
                thisObj._populateUIArticle(data);
            },
            error   : function(e) {
                console.log(e);
            },
            fail    : function () { 
                console.log("Request Fail");
            }
        });
    }

    getUsers() {
        var thisObj = this;
        $.ajax({
            dataType : 'json',
            url      : thisObj.routes.USERS,
            cache    : false,
            type     : 'GET',
            success  : function (data) {
                thisObj._populateUIUsers(data);
            },
            error   : function(e) {
                console.log(e);
            },
            fail    : function () { 
                console.log("Request Fail");
            }
        });
    }

    showArticleContentPopUp() {
        $(document).on('click', 'li.click-to-pop-up', function() {   
            var $target = $('#popup div.ui-content');
            $target.find('h2').text( $(this).children('a').attr('data-title'));
            $target.find('h4').text($(this).children('a').attr('data-description-text'));
            $target.find('p:nth-child(3) small span').text($(this).children('a').attr('data-views'));
            $target.find('p:nth-child(4) small span').text($(this).children('a').attr('data-like'));
            $target.find('p:nth-child(5) small span').text($(this).children('a').attr('data-dislike'));
            $target.find('p:nth-child(6) small span').text($(this).children('a').attr('data-date-published'));
        });
    }

    showUserContentPopUp() {
        $(document).on('click', 'li.click-to-pop-up', function() {   
            var $target = $('#popup div.ui-content');
            $target.find('h2').text($(this).children('a').attr('data-name'));
            $target.find('p:nth-child(2) small span').text($(this).children('a').attr('data-email'));
            $target.find('p:nth-child(3) small span').text( $(this).children('a').attr('data-phone'));
            $target.find('p:nth-child(4) small span').text($(this).children('a').attr('data-address'));
            $target.find('p:nth-child(5) small span').text($(this).children('a').attr('data-job'));
            $target.find('p:nth-child(6) small span').text($(this).children('a').attr('data-company'));
            $target.find('p:nth-child(7) small span').text($(this).children('a').attr('data-card'));
            $target.find('p:nth-child(8) small span').text($(this).children('a').attr('data-account'));
        });
    }

    _populateUIArticle(data) {
        var table = '';
        $.each(data, function (idx, obj) {                                   
            table += (`
            <li class="click-to-pop-up">
                <a href="#popup" 
                    data-rel="dialog" 
                    data-transition="flip" 
                    data-description-text="${obj.description}" 
                    data-title="${obj.title}" 
                    data-views="${obj.views}" 
                    data-like="${obj.like}" 
                    data-dislike="${obj.dislike}" 
                    data-date-published="${obj.date_published}" 
                >
                    ${obj.title}
                </a>
            </li>
            `);
        });
        this._appendToTable(table);
    }

    _populateUIUsers(data) {
        var table = '';
        $.each(data, function (idx, obj) {                                   
            table += (`
            <li class="click-to-pop-up">
                <a href="#popup" 
                    data-rel="dialog" 
                    data-transition="flip" 
                    data-email="${obj.email}" 
                    data-name="${obj.name}" 
                    data-phone="${obj.phone}" 
                    data-address="${obj.address}" 
                    data-job="${obj.job}" 
                    data-company="${obj.company}" 
                    data-card="${obj.card}" 
                    data-account="${obj.account}" 
                >
                    ${obj.name}
                </a>
            </li>
            `);
        });
        this._appendToTable(table);
    }

    _appendToTable(table) {
        $("#ListContainer").append(table);
        $("#ListContainer li").addClass('ui-first-child ui-last-child');
        $("#ListContainer li a").addClass('ui-btn ui-btn-icon-right ui-icon-carat-r');
    }

}

export default Api;