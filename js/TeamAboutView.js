var app = app || {};

app.TeamAboutView = Backbone.View.extend ({
	el : '#about',
	
	aboutTemplate : _.template($('#about-template').html()),
	
	collection : '',
	
	initialize : function() {
		// 通常データはRESTでサーバサイドから取得するが、
		// 今は固定の値を入れる。
		this.collection = new app.TeamCollection();
		
		// データを取得する。
		this.collection.fetch();
		
		// データ取得後に、画面を描画する。
		this.listenTo(this.collection, 'sync' , this.render);
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