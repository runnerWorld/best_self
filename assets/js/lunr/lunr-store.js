var store = [{
        "title": "1年12个项目",
        "excerpt":"   今天来聊下数字游民狂人Pieter Levels， 我更喜欢称他是项目狂人，因为他1年创建了12个项目，没有很强的行动力，恐怕连半数项目都做不来。12个项目当中获取有很好的创业idea，也可能激发你创业的idea，谁知道呢？   Play My Inbox  Levels和他朋友有个习惯，他们对于喜爱的歌曲，他们会将歌曲链接放入邮件发给对方。基于这个习惯，他开发了这个产品，将收件箱的喜爱歌曲获取出来然后循环播放。个人非常喜欢这个idea。   Go Fucking Do It  每个人在可接受的压力下，是可以迫使自己达到一定的目标。这个产品就是这么来的。设置一个目标和一个实际的时间，如果到了时间节点你没法达到目标，你压在网站的钱就会没收了。。。   Tubelytics  这个产品是一个服务自媒体的数据分析平台。实时监控并查看视频平台各频道的情况。但2015年时候这个产品就停止了。   NomadList  大名鼎鼎的NomadList,方便用户能够了解世界上哪个城市能够更好的生活和远程工作。主要参数有生活成本，天气（这个太重要了），网速   NomadJobs  只为创业公司提供的职位发布平台，并且完全按照Levels的作风，只能是远程工作。   GifBook  上传你喜欢的Gif图，然后将图片变成动画书，类似小时候一个动作需要画很多张图，然后快速的翻这些图，这个动作就活动起来了。有时候老外的想法比较奇特。。。   Nomads  一个很酷的数字游民聊天社区。在社区里面你可以了解很多世界各地的资讯。   Remote|OK  这个产品厉害了。主要是展示远程工作职位的，不同于传统的招聘网站，不能够发布职位，产品是采集那些远程职位然后进行展示的。   然后，貌似没有12个项目呢，有些栏目可能烂尾了。。。从以上项目可以看出，基本上Levels一个人活出了一个团队，很有想法的全栈的工程师。  ","categories": ["sideproject"],
        "tags": [],
        "url": "/sideproject/1year-12-projects/",
        "teaser": null
      },{
        "title": "如何在Rails 项目里面加入图表",
        "excerpt":"在这篇文章里面，我们用到Chart.js，这是一个图表的js库。整个集成过程比较简单，运用到实际的项目需要自己考虑项目的情况，这里只做一个简单展示。 第一步 我们直接引用cdn。打开的application.html.erb，加入这段代码 &lt;link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/chart.js@2.9.1/dist/Chart.min.css\"&gt; &lt;script src=\"https://cdn.jsdelivr.net/npm/chart.js@2.9.1/dist/Chart.min.js\"&gt;&lt;/script&gt; 第二步 然后新建一个页面，创建一个canvas &lt;canvas id=\"myChart\" width=\"960\" height=\"200\"&gt;&lt;/canvas&gt; 第三步 加入图表相关代码，直接在页面上写也是可以的。 &lt;script&gt; var ctx = document.getElementById('myChart'); var myChart = new Chart(ctx, { type: 'bar', data: { labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], datasets: [{ label: '# of Votes', data: [12, 19, 3, 5, 2,...","categories": ["ruby on rails"],
        "tags": [],
        "url": "/ruby%20on%20rails/how-to-add-chart-to-rails/",
        "teaser": null
      },{
        "title": "从500强企业中辞职出来创业",
        "excerpt":"   今天的主人公 Rachit Khator，Stackby.com的创始人。前500强企业员工，高薪福利好，在职时候就经常使用电子表格管理工作流程，但是也遇到很多麻烦，所以他也在寻求CRM或者项目管理软件去处理他碰到的问题，但是都不尽如人意。他通过他的渠道做了个小调研，收集大家碰到的情况。便毅然的在2018年美国500强公司辞职了，并且去到印度开公司。   当时回到印度碰到的第一个问题就是人手，Rachit Khator所在的城市，是以纺织品和钻著称的，所以要搭建一支技术团队还是比较慢的，就这样不断招人和完善产品，历经两年，产品问世。其中的反差就是之前领的6位数工资以及舒适的岗位，到两年0收入。后来Rachit  说其实还是想拥有自己产品的执念支撑。   产品的盈利模式很简单，也是目前流行的。有三种收费套餐，免费套餐，标准套餐以及定制套餐。目前在1年的情况下已经累积了4千用户。现在每月盈利在5万美金。   关于 Stackby.com   Stackby.com 轻松的把电子表格打造成了一个数据库，使用人可以不需要懂任何数据库的技术（包括数据类型，索引一大堆数据库专有名词），不需要懂代码，轻松的就可以把自己的业务放到上面进行管理。也可以轻松去整合市面上的api，如脸书，油管，g家等，去读取上面的数据。项目管理，视频创作，市场营销这类场景统统试用。   Stackby.com 主要采用React作为前端，Node.js作为后端。整个js技术栈。   写在后面   其实若干年前，我就碰到一个以电子表格为基础的应用，一下子想不起来了。国内团队开发的。我们大多数做web开发的，以CRUD为核心，如果可以灵活改造电子表格，是可以解决大部分业务管理系统的需求的。无非就是灵活自定义数据类型，各种查询条件自定义，灵活创建自定义表单。使用户随心所欲的录入数据，然后在随心所欲查询，图形化展示，导出下载等  ","categories": ["startup"],
        "tags": [],
        "url": "/startup/quit-from-500/",
        "teaser": null
      },{
        "title": "快速处理csv",
        "excerpt":"今天看到个文章，是说处理csv的。csv虽说挺方便，可以简单管理关系型数据，不需要买个office365来处理。笔者说处理csv文件是个头痛的问题，链接附上处理csv的代码，但是如果出来的行数足够大，那也是挺恐怖。   图1      使用SmarterCSV。简单对比。   图2      总结  关于SmarterCSV还没得细看，看起来不错，做个记录。联想起之前项目也有生成csv过程，但是直接扔进数据库比较多，而且还是可以迭代处理，感觉不需要单个列 写出来。  ","categories": ["Ruby"],
        "tags": [],
        "url": "/ruby/csv-gem/",
        "teaser": null
      }]
