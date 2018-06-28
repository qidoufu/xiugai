(function() {
    let detailArr = [
        '林下放养黑猪猪肉嫩度佳，口感鲜美，汤汁浓郁，营养丰富，富含铁质，维生素，蛋白质，氨基酸和不饱和脂肪酸，黑猪肉对人体有极高的营养价值和保健作用，长期使用可以延年益寿，低脂肪，高蛋白，是崇尚节食的现代人的最佳选择。 生产过程中严格控制产品质量，无药残 无抗生素 无促生长激素 汪清县与伊比利亚纬度接近，都盛产橡木果，肉质可以媲美伊比利亚黑猪。',
        '森林鸡的养殖基地位于汪清县的茂盛山林间，都是自由散养，以山间百草、杂粮、鲜珍为食。以山泉甘露为饮。这种原生态环境下养育出的森林鸡毛色光亮，鸡冠红红，肉质比较紧密细嫩，蛋白质含量很高，不仅味道鲜美，还具有滋补肝肾，益气补血的作用。',
        '森林鸡蛋蛋清浓厚，蛋黄呈橘黄色，含有大量的孵磷脂和维生素A、B、E，以及微量元素碘、锌、硒，属于高维生素、高微量元素、高氨基酸、低胆固醇、低脂肪，营养均衡，长期使用可提高人体免疫力，在生产过程中严格控制无药残、无抗生素、无化学色素',
        '延边黄牛是吉林省延边朝鲜族自治州地区役肉兼用黄牛品种，其体格高大结实、适应性强、肉质细嫩、汁多味美，柔软适口，无酸骚异味，延边黄牛品种特征和肉品特性优良，具有鲜明的地域特色，在国内外市场享有一定声誉的高档肉牛品种',
        '“绿色生态大米”采用优质精米水稻品种，米粒均匀，晶莹剔透，色泽光润，饭香浓郁，吃起来绵软略粘、芳香爽口，蒸熟后饭粒表面有油光，富含植物蛋白及人体所需的多种氨基酸，维生素，对人体具有益智保健的作用，是老百姓餐桌上的健康首选。',
        '心血管患者的佳品,蜂蜜能改善血液的成分，促进心脑和血管功能，因此经常服用于心血管病人很有好处。保护肝脏,蜂蜜对肝脏有保护作用，能促使肝细胞再生，对脂肪肝的形成有一定的抑制作用。增强抵抗力,食用蜂蜜能迅速补充体力，消除疲劳，增强对疾病的抵抗力。促进胃肠蠕动,蜂蜜对胃肠功能有调节作用，可使胃酸分泌正常。动物实验证实，蜂蜜有增强肠蠕动的作用，可显著缩短排便时间',
        '香菇素有“山珍”之称。它是一种生长在木材上的真菌。味道鲜美，香气沁人，营养丰富。香菇富含维生素B、铁、钾、维生素D，主治食欲减退，少气乏力。 香菇素有"山珍之王"之称，是高蛋白、低脂肪的营养保健食品。香菇中麦角甾醇含量很高，对防治佝偻病有效；香菇多糖能增强细胞免疫能力，从而抑制癌细胞的生长；香菇含有六大酶类的40多种酶，可以纠正人体酶缺乏症；香菇中的脂肪所含脂肪酸，对人体降低血脂有益。',
        '木耳色泽黑褐，质地柔软呈胶质状，薄而有弹性，湿润时半透明，干燥时收缩变为脆硬的角质近似革质。味道鲜美，营养丰富，富含 铁、 钙、 磷和 维生素B1等具有很多药用功效。能益气强身，有活血效能，并可防治缺铁性贫血等；可养血驻颜，令人肌肤红润，容光焕发，能够疏通肠胃，润滑肠道，同时对高血压患者也有一定帮助。',
        '海松子又名红松，果松、红果松、朝鲜五叶松。生长于湿润的缓山坡或排水良好的平坦地，多与阔叶树成混交林，分布东北。\n' +
        '松子内含有大量的不饱和脂肪酸，常食松子，可以强身健体，特别对老年体弱、腰痛、便秘、眩晕、小儿生长发育迟缓均有补肾益气、养血润肠、滋补健身的作用。\n' +
        '松子中的磷和锰含量也非常丰富，这对大脑和神经都有很好的补益作用，是脑力劳动者的健脑佳品，对老年痴呆也有很好的预防作用。',
    ]

    // Modal
    class Modal {

        constructor(el) {

            this.$el = el;

        }

        open() {

            this.$el.show();

        }

        close() {

            this.$el.hide();

        }

    }

    const modal = new Modal($('#modal'))

    $('.close').click(() => {

        modal.close();

    })

    let imgArr = [];

    $('.case-item').click((el) => {

        imgArr = [];

        modal.open();

        let imgSrc = $(el.currentTarget).find('img').attr('src');

        $('#modalImg').attr('src', imgSrc);

        let imgName = $(el.currentTarget).find('img').attr('alt');

        $('.modalTitle').html(imgName);

        for (let i = 0; i < $('.case-item').length; i++) {

            imgArr.push($('.case-item').eq(i).find('img').attr('src'))

        }

        let cilicili = parseInt(imgArr.indexOf(imgSrc));

        $('.scollImg li').removeClass('activeBorder');

        $('.scollImg li').eq(cilicili).addClass('activeBorder');

        $('.cost').html(detailArr[cilicili])

        if (cilicili != imgArr.length - 1) {

            $('.smallImgLeft').click();

        } else {

            $('.smallImgRight').click()

        }

    })

    let index = 0;

    let bilibili = () => {

        let imgSrc = $('#modalImg').attr('src');

        index = parseInt(imgArr.indexOf(imgSrc))

    }

    let duliduli = (index) => {

        $('.scollImg li').removeClass('activeBorder');

        $('.scollImg li').eq(index).addClass('activeBorder')
    }

    $('.left-click').click(() => {

        bilibili();

        if (index === 0) {

            index = $('.case-item').length - 1;

            $('.smallImgRight').click()

        } else {

            index--;

            if (index === 0) {

                $('.smallImgLeft').click()

            }

        }

        $('#modalImg').attr('src', imgArr[index]);

        let imgName = $('.scollImg li').eq(index).find('img').attr('alt');

        $('.modalTitle').html(imgName);

        duliduli(index)

        $('.cost').html(detailArr[index])

    })

    $('.right-click').click(() => {

        bilibili();

        if (index === $('.case-item').length - 1) {

            index = 0;

            $('.smallImgLeft').click();

        } else {

            index++;

            if (index === $('.case-item').length - 1) {

                $('.smallImgRight').click()

            }

        }


        $('#modalImg').attr('src', imgArr[index]);

        let imgName = $('.scollImg li').eq(index).find('img').attr('alt');

        $('.modalTitle').html(imgName);

        duliduli(index)

        $('.cost').html(detailArr[index])

    })

    $('.smallImgLeft').click(() => {

        $('.scollImg').animate({ 'right': '0' })

        $('.smallImgLeft').hide();

        $('.smallImgRight').show();

    })

    $('.smallImgRight').click(() => {
        var x = $(".scollImg li img").width();
        console.log(x);
        $('.scollImg').animate({ 'right': x });

        $('.smallImgLeft').show();

        $('.smallImgRight').hide();

    })

    $('.scollImg li').click((el) => {

        let imgName = $(el.currentTarget).find('img').attr('alt');

        $('.modalTitle').html(imgName);

        let imgSrc = $(el.currentTarget).find('img').attr('src');

        $('#modalImg').attr('src', imgSrc);

        let index = parseInt(imgArr.indexOf(imgSrc));

        $('.scollImg li').removeClass('activeBorder');

        $(el.currentTarget).addClass('activeBorder');

        $('.cost').html(detailArr[index])

    })

})()