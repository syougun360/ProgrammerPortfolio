window.onload = function() {
	DrawMyProfile();
	DrawContents();
	DrawSkillSheet();
};

// プロフィール
function DrawMyProfile(){
	DrawMyProfileInner("ヤマダマサミツ",24,
		[
			"好きなこと：",
			"自分の武器："
		]
	);
}

// 作品紹介
function DrawContents(){
	DrawContent("ハデ・メカ・バトル","ロボットアクションゲーム","Unity5、C#、VisualStudio2015、WiiU","PG：4人　合計12人",
		"https://github.com/syougun360/csv_read",
		[
		"あああああああああああああああああああああああああああああああああああああああああ",
		"いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい",
		"うううううううううううううううううううううううううううううううううううううううううう"
		],
		"https://drive.google.com/file/d/1yyC9ccGl-_ZVGzPSBVszUADZHjK6krVw/preview");

	DrawContent("ハデ・メカ・バトル","ロボットアクションゲーム","Unity5、C#、VisualStudio2015、WiiU","PG：4人　合計12人",
		"https://github.com/syougun360/csv_read",
		[
		"あああああああああああああああああああああああああああああああああああああああああ",
		"いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい",
		"うううううううううううううううううううううううううううううううううううううううううう"
		],
		"https://drive.google.com/file/d/1yyC9ccGl-_ZVGzPSBVszUADZHjK6krVw/preview");
}

// スキルシート
function DrawSkillSheet(){
	DrawSkill("C","言語","2年間","特になし");
	DrawSkill("C++","言語","2年間","特になし");
	DrawSkill("C#","言語","2年間","特になし");
	DrawSkill("Unity","ゲームエンジン","2年間","特になし");
	DrawSkill("UE4","ゲームエンジン","1年間","特になし");
	DrawSkill("DxLib","ゲームライブラリ","1年間","特になし");
	DrawSkill("Siv3D","ゲームライブラリ","1年間","特になし");
	DrawSkill("DirectX9","3DグラフィックスAPI","1年間","特になし");
	DrawSkill("OpenGL","3DグラフィックスAPI","1年間","特になし");
	DrawSkill("WPF","ツール開発ツール","6か月","特になし");
}



















function DrawMyProfileInner(nameText,age,profiles){

	var nameElement = document.getElementById("Name");
	nameElement.innerHTML = "名前：" + nameText + "(" + age + "才)";

	var profile = document.getElementById("MyProfile");
	profile.innerHTML = "";
	var ul = document.createElement("ul");
	for(var i = 0; i < profiles.length; i++){
		var li = document.createElement("li");
		li.innerHTML = profiles[i];
		ul.append(li);
	}
	profile.append(ul);
}

// 作品を書き込む
function DrawContent(titleText,genreText,toolsText,devPeopleOfNumText,codeURL,goodThingText,videoURL){
	var contents = document.getElementById("game");

	var divTableParent = document.createElement("div");
	divTableParent.className = "table-responsive";
	
	var tableParent = document.createElement("table");
	tableParent.className = "table table-bordered";

	var tbodyParent = document.createElement("tbody");
	var td = [2];

	// 左側（動画）
	td[0] = document.createElement("td");
	var iframeVideo = document.createElement("iframe");
	iframeVideo.id = "playVideo";
	iframeVideo.src = videoURL;

	td[0].append(iframeVideo);
	tbodyParent.append(td[0]);

	// 右側
	td[1] = document.createElement("td");
	var divTable = document.createElement("div");
	divTable.className = "table-responsive";
	
	var table = document.createElement("table");
	table.className = "table table-bordered";

	var tbodyTitle = document.createElement("tbody");
	var trTitle = document.createElement("tr");
	var thTitle = document.createElement("th");
	var tdTitleText = document.createElement("td");
	thTitle.width = 150;
	thTitle.innerHTML = "タイトル";
	tdTitleText.innerHTML = titleText;
	trTitle.append(thTitle);
	trTitle.append(tdTitleText);
	tbodyTitle.append(trTitle);

	var tbodyGenre = document.createElement("tbody");
	var trGenre = document.createElement("tr");
	var thGenre = document.createElement("th");
	var tdGenreText = document.createElement("td");
	thGenre.innerHTML = "ジャンル";
	tdGenreText.innerHTML = genreText;
	trGenre.append(thGenre);
	trGenre.append(tdGenreText);
	tbodyGenre.append(trGenre);

	var tbodyTools = document.createElement("tbody");
	var trTools = document.createElement("tr");
	var thTools = document.createElement("th");
	var tdToolsText = document.createElement("td");
	thTools.innerHTML = "言語・ツール";
	tdToolsText.innerHTML = toolsText;
	trTools.append(thTools);
	trTools.append(tdToolsText);
	tbodyTools.append(trTools);

	var tbodyDevPeopleOfNum = document.createElement("tbody");
	var trDevPeopleOfNum = document.createElement("tr");
	var thDevPeopleOfNum = document.createElement("th");
	var tdDevPeopleOfNumText = document.createElement("td");
	thDevPeopleOfNum.innerHTML = "開発人数";
	tdDevPeopleOfNumText.innerHTML = devPeopleOfNumText;
	trDevPeopleOfNum.append(thDevPeopleOfNum);
	trDevPeopleOfNum.append(tdDevPeopleOfNumText);
	tbodyDevPeopleOfNum.append(trDevPeopleOfNum);

	var tbodyCode = document.createElement("tbody");
	var trCode = document.createElement("tr");
	var thCode = document.createElement("th");
	var tdCodeText = document.createElement("td");
	var aCodeURL = document.createElement("a");
	thCode.innerHTML = "ソースコード";
	aCodeURL.href = codeURL;
	aCodeURL.innerHTML = codeURL;
	tdCodeText.append(aCodeURL);
	trCode.append(thCode);
	trCode.append(tdCodeText);
	tbodyCode.append(trCode);

	var tbodyStudy = document.createElement("tbody");
	var trStudy = document.createElement("tr");
	var thStudy = document.createElement("th");
	var tdStudy = document.createElement("td");
	var ulStudy = document.createElement("ul");
	thStudy.innerHTML = "学んだこと";

	for(var i = 0; i < goodThingText.length; i++){
		var liStudy = document.createElement("li");
		liStudy.innerHTML = goodThingText[i];
		ulStudy.append(liStudy);
	}

	tdStudy.append(ulStudy);
	trStudy.append(thStudy);
	trStudy.append(tdStudy);
	tbodyStudy.append(trStudy);

	table.append(tbodyTitle);
	table.append(tbodyGenre);
	table.append(tbodyTools);
	table.append(tbodyDevPeopleOfNum);
	table.append(tbodyCode);
	table.append(tbodyStudy);
	divTable.append(table);
	td[1].append(divTable);
	tbodyParent.append(td[1]);

	// 親階層
	tableParent.append(tbodyParent);
	divTableParent.append(tableParent);
	contents.append(divTableParent);
}


// スキルを書き込む
function DrawSkill(nameText,categoryText,userTimeText,otherText){
	var skillSheetTable = document.getElementById("SkillSheetTable");

	var tBody = document.createElement("tbody");
	var tr = document.createElement("tr");

	var name = document.createElement("td");
	name.innerHTML = nameText;
	var category = document.createElement("td");
	category.innerHTML = categoryText;
	var usedTime = document.createElement("td");
	usedTime.innerHTML = userTimeText;
	var other = document.createElement("td");
	other.innerHTML = otherText;

	tr.append(name);
	tr.append(category);
	tr.append(usedTime);
	tr.append(other);
	tBody.append(tr);

	skillSheetTable.append(tBody);
}