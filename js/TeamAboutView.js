var app = app || {};

app.TeamAboutView = Backbone.View.extend ({
	el : '#about',
	
	aboutTemplate : _.template($('#about-template').html()),
	
	collection : '',
	
	initialize : function() {
		// 通常データはRESTでサーバサイドから取得するが、
		// 今は固定の値を入れる。
		this.collection = new app.TeamCollection();
		
		var memberModel = new app.MemberModel();
		// メンバ1
		memberModel.set('name', '山田太朗');
		memberModel.set('birthday', '1981年3月1日');
		memberModel.set('position', 'ゴレイロ');
		this.collection.add(memberModel);

		memberModel = new app.MemberModel();
		// メンバ2
		memberModel.set('name', '山田次郎');
		memberModel.set('birthday', '1981年4月1日');
		memberModel.set('position', 'フィクソ');
		this.collection.add(memberModel);

		// 画面を描画する。
		this.render();
	},
	
	render : function() {
		var that = this;
		
		// コレクションに入っているデータ件数分、メンバーを表示する。
		this.collection.each(function(model){
			that.$el.append(that.aboutTemplate(model.toJSON()));
			console.log(model.toJSON());
		});
	},
});