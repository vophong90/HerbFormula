const heartSyndromes = [
  {
    stt: 1145,
    tenViet: "Chứng Tâm khí hư",
    tenAnh: "Heart qi deficiency pattern",
    moTa: "Đặc trưng bởi đánh trống ngực, khó thở và mệt mỏi, nặng hơn khi gắng sức. Tự hãn và mặt nhợt nhạt cũng có thể xuất hiện. Lưỡi nhợt. Mạch hư. Tình trạng này thường xảy ra khi Tâm khí không thể giúp Tâm bơm máu.",
    tenTrung: ["心气虚证", "心气亏虚证"],
    pinyin: "xīn qì xū zhèng"
  },
  {
    stt: 1146,
    tenViet: "Chứng Tâm khí huyết lưỡng hư",
    tenAnh: [
      "Deficiency of heart qi and blood pattern",
      "Dual deficiency of heart qi and blood pattern"
    ],
    moTa: "Đặc trưng bởi hồi hộp, khó thở, uể oải, mệt mỏi, chóng mặt, hay quên, mộng mị nhiều và mặt nhợt nhạt. Lưỡi nhợt. Mạch tế nhược. Tình trạng này thường xảy ra khi khí huyết không nuôi dưỡng được Tâm và tâm thần.",
    tenTrung: "心气血两虚证",
    pinyin: "xīn qì xuè liǎng xū zhèng"
  },
  {
    stt: 1147,
    tenViet: "Chứng Tâm khí âm lưỡng hư",
    tenAnh: "Deficiency of heart qi and yin pattern",
    moTa: "Đặc trưng bởi đánh trống ngực, khó thở, mệt mỏi, chóng mặt, mất ngủ, mộng mị nhiều và đỏ bừng mặt. Lưỡi đỏ, rêu lưỡi ít. Mạch sác hoặc nhược. Chứng này thường xảy ra khi khí và âm không nuôi dưỡng được Tâm và tâm thần.",
    tenTrung: "心气阴两虚证",
    pinyin: "xīn qì yīn liǎng xū zhèng"
  },
  {
    stt: 1148,
    tenViet: ["Chứng Tâm dương hư", "Chứng Tâm dương khuy hư"],
    tenAnh: "Heart yang deficiency pattern",
    moTa: "Đặc trưng bởi đánh trống ngực từ nhẹ đến nặng, tức ngực, không chịu được lạnh, chân tay lạnh, sắc mặt tái nhợt, khó thở và tự hãn. Phù chân và môi thâm cũng có thể xuất hiện. Lưỡi tím, rêu lưỡi trắng trơn. Mạch nhược hoặc đại (đợi) đều/không đều. Chứng này có thể là một sự tiến triển của tình trạng Tâm khí hư. Nó cũng có thể xảy ra khi Tâm dương không thể làm ấm cơ thể.",
    tenTrung: ["心阳虚证", "心阳亏虚证"],
    pinyin: "xīn yáng xū zhèng"
  },
{
  stt: 1149,
  tenViet: "Chứng Tâm dương bạo thoát",
  tenAnh: "Sudden collapse of heart yang pattern",
  moTa: "Đặc trưng bởi đổ mồ hôi lạnh, chân tay lạnh, hơi thở yếu, đánh trống ngực từ nhẹ đến nặng, da nhợt nhạt và rối loạn tâm thần hoặc mất ý thức. Mạch nhược. Chứng này có thể là một sự tiến triển của Tâm dương hư. Nó cũng có thể xảy ra do sự tắc nghẽn đột ngột hoặc bị tấn công bởi thực tà.",
  tenTrung: ["心阳暴脱证"],
  pinyin: "xīn yáng bào tuō zhèng"
},
{
  stt: 1150,
  tenViet: "Chứng Tâm huyết hư",
  tenAnh: "Heart blood deficiency pattern",
  moTa: "Đặc trưng bởi cảm giác hồi hộp, chóng mặt, mộng mị nhiều, hay quên, da trắng nhợt hoặc tái nhợt và môi nhợt. Lưỡi nhợt. Mạch tế. Tình trạng này thường xảy ra khi Tâm huyết không nuôi dưỡng được Tâm và tâm thần.",
  tenTrung: ["心血虚证", "心血亏虚证"],
  pinyin: "xīn xuè xū zhèng"
},
{
  stt: 1151,
  tenViet: "Chứng Tâm âm hư",
  tenAnh: "Heart yin deficiency pattern",
  moTa: "Đặc trưng bởi hồi hộp, bồn chồn, mất ngủ, mộng mị nhiều, chóng mặt, hay quên, bốc hỏa và đạo hãn. Lưỡi đỏ, rêu lưỡi ít. Mạch tế sác. Chứng này thường xảy ra khi Tâm âm không nuôi dưỡng được Tâm và tâm thần.",
  tenTrung: ["心阴虚证", "心阴亏虚证"],
  pinyin: "xīn yīn xū zhèng"
},
{
  stt: 1152,
  tenViet: "Chứng Tâm mạch ứ trở",
  tenAnh: "Heart vessels stasis pattern",
  moTa: "Đặc trưng bởi tức ngực, đánh trống ngực và đau tim lan ra vai và lưng. Lưỡi tím đậm. Mạch tế sáp hoặc đại (đợi) đều/không đều. Tình trạng này thường xảy ra khi huyết ứ làm tắc nghẽn Tâm mạch.",
  tenTrung: ["心脉瘀阻证", "心血瘀滞证", "心脉痹阻证"],
  pinyin: "xīn mài yū zǔ zhèng"
},
{
  stt: 1153,
  tenViet: "Chứng đàm trở Tâm mạch",
  tenAnh: "Phlegm obstructing the heart vessels pattern",
  moTa: "Đặc trưng bởi tức ngực, đau ngực, béo phì, nhiều đờm, cảm giác cơ thể nặng nề và nước da tối. Lưỡi tím nhạt, rêu lưỡi trắng nhớt. Mạch hoạt. Chứng này thường xảy ra khi đàm trọc làm tắc nghẽn sự vận hành của Tâm huyết.",
  tenTrung: ["痰阻心脉证"],
  pinyin: "tán zǔ xīn mài zhèng"
},
{
  stt: 1154,
  tenViet: "Chứng ẩm đình Tâm bào",
  tenAnh: "Fluid retention affecting the pericardium pattern",
  moTa: "Đặc trưng bởi đánh trống ngực từ nhẹ đến nặng, tức ngực, thở hổn hển và không thể nằm thẳng. Lưỡi tím nhạt, rêu lưỡi trắng trơn. Mạch trầm phục nhược. Chứng này thường xảy ra khi dịch ẩm tích tụ ở Tâm bào làm tắc nghẽn sự vận hành khí huyết.",
  tenTrung: ["饮停心包证"],
  pinyin: "yǐn tíng xīn bāo zhèng"
},
{
  stt: 1155,
  tenViet: "Chứng Tâm hỏa thượng viêm",
  tenAnh: "Upward flaming of heart fire pattern",
  moTa: "Đặc trưng bởi sốt, khát nước, bồn chồn, mặt đỏ và miệng/lưỡi loét đỏ và đau. Mạch sác. Chứng này thường xảy ra khi hỏa thịnh bốc lên miệng/lưỡi dọc theo kinh Tâm.",
  tenTrung: ["心火上炎证"],
  pinyin: "xīn huǒ shàng yán zhèng"
},
{
  stt: 1156,
  tenViet: "Chứng nhiệt bế Tâm bào",
  tenAnh: "Heat blocking the pericardium pattern",
  moTa: "Đặc trưng bởi sốt, khát nước và mất ý thức. Cũng có thể có mê sảng, hưng cảm, mặt đỏ bừng và thở nhanh. Lưỡi đỏ, rêu lưỡi vàng. Mạch hoạt sác. Chứng này thường xảy ra khi nhiệt thịnh tích tụ quấy rối tâm thần.",
  tenTrung: ["热闭心包证", "热闭心神证"],
  pinyin: "rè bì xīn bāo zhèng"
},
{
  stt: 1157,
  tenViet: "Chứng nhiệt nhiễu Tâm thần",
  tenAnh: "Heat disturbing the heart spirit pattern",
  moTa: "Đặc trưng bởi hồi hộp, bồn chồn, mất ngủ và mộng mị nhiều. Cũng có thể xuất hiện mê sảng, sốt, khát nước và mặt đỏ. Lưỡi đỏ, rêu lưỡi vàng. Mạch hoạt sác. Chứng này thường xảy ra khi nhiệt thịnh tích tụ quấy rối tâm thần.",
  tenTrung: ["热扰心神证", "火扰心神证"],
  pinyin: "rè rǎo xīn shén zhèng"
},
{
  stt: 1158,
  tenViet: "Chứng đàm hỏa nhiễu Tâm",
  tenAnh: "Phlegm fire disturbing the heart pattern",
  moTa: "Đặc trưng bởi tăng động, nói nhiều, bồn chồn, bốc đồng, mất kiểm soát hành vi, mất tập trung, cảm giác nóng ở ngực, khó chịu, chán ăn, miệng đắng, táo bón và nước tiểu vàng sẫm. Lưỡi đỏ, rêu lưỡi vàng nhớt. Mạch hoạt sác. Chứng này thường xảy ra do sự tích tụ của đàm hỏa bên trong.",
  tenTrung: ["痰火扰心证", "痰火扰神证", "痰热扰神证", "痰热扰心证"],
  pinyin: "tán huǒ rǎo xīn zhèng"
},
{
  stt: 1159,
  tenViet: "Chứng đàm mê tâm khiếu",
  tenAnh: "Phlegm misting the heart pattern",
  moTa: "Đặc trưng bởi biểu hiện tinh thần đờ đẫn, ý thức mờ mịt, trầm cảm, cử chỉ thất thường, không thể nhận ra người, có đờm trong cổ họng, tức ngực, nhiều đờm và nước da xám tối. Rêu lưỡi nhớt. Mạch hoạt. Chứng này thường xảy ra khi đàm trọc che bít tâm khiếu.",
  tenTrung: [
    "痰迷心窍证",
    "痰蒙心窍证",
    "痰阻心窍证",
    "痰闭心窍证",
    "痰蒙心神证",
    "痰阻心神证",
    "痰闭心神证",
    "痰迷心神证"
  ],
  pinyin: "tán mí xīn qiào zhèng"
},
{
  stt: 1160,
  tenViet: "Chứng ứ trở não lạc",
  tenAnh: "Blood stasis obstructing the brain collaterals pattern",
  moTa: "Đặc trưng bởi chóng mặt, đau đầu dai dẳng ở một vị trí cố định và nước da xám tối. Một số bệnh nhân có thể bị mất ý thức thoáng qua hoặc trí nhớ kém sau chấn thương đầu. Lưỡi tím sẫm hoặc có vết ứ huyết/điểm ứ huyết. Mạch tế sáp. Chứng này thường xảy ra khi huyết ứ làm tắc nghẽn não lạc.",
  tenTrung: ["瘀阻脑络证", "瘀阻脑窍证"],
  pinyin: "yū zǔ nǎo luò zhèng"
},
{
  stt: 1161,
  tenViet: "Chứng tâm thần bất ninh",
  tenAnh: "Disquieted heart spirit pattern",
  moTa: "Đặc trưng bởi đánh trống ngực, hoảng sợ, bồn chồn, mất ngủ, mộng mị nhiều, hốt hoảng hoặc dễ giật mình. Chứng này thường là kết quả của rối loạn cảm xúc hoặc tình trạng bệnh lý.",
  tenTrung: ["心神不宁证"],
  pinyin: "xīn shén bù níng zhèng"
},
{
  stt: 1162,
  tenViet: "Chứng Tiểu trường thực nhiệt",
  tenAnh: "Excess heat in the small intestine pattern",
  moTa: "Đặc trưng bởi sốt, khát nước, bồn chồn, mất ngủ, loét miệng/lưỡi, nước tiểu ít, vàng và đi tiểu đau buốt. Trong trường hợp nặng, có thể có tiểu máu. Lưỡi đỏ, rêu lưỡi vàng. Mạch sác. Chứng này thường xảy ra khi Tâm hỏa chuyển nhiệt xuống Tiểu trường hoặc khi thấp nhiệt tích tụ ở Tiểu trường.",
  tenTrung: ["小肠实热证"],
  pinyin: "xiǎo cháng shí rè zhèng"
},
{
  stt: 1163,
  tenViet: "Chứng Tiểu trường khí trệ",
  tenAnh: "Small intestine qi stagnation pattern",
  moTa: "Đặc trưng bởi cảm giác đầy/chướng/đau bụng, nặng hơn khi rối loạn cảm xúc và giảm bớt khi ợ hơi hoặc trung tiện. Mạch huyền. Chứng này thường là kết quả của khí trệ ở Tiểu trường.",
  tenTrung: ["小肠气滞证"],
  pinyin: "xiǎo cháng qì zhì zhèng"
},
{
  stt: 1164,
  tenViet: "Chứng Tiểu trường hư hàn",
  tenAnh: "Deficiency cold in the small intestine pattern",
  moTa: "Đặc trưng bởi thức ăn không tiêu trong phân, đau bụng âm ỉ, giảm khi gặp ấm, khát muốn uống nước ấm, chân tay lạnh, tiểu khó và phân lỏng. Lưỡi nhợt, rêu lưỡi trắng trơn. Mạch trầm nhược. Chứng này thường xảy ra khi nội hàn (do dương khí hư) ảnh hưởng đến chức năng của Tiểu trường trong phân thanh giáng trọc.",
  tenTrung: ["小肠虚寒证"],
  pinyin: "xiǎo cháng xū hán zhèng"
},
{
  stt: 1166,
  tenViet: "Chứng Phế khí âm lưỡng hư",
  tenAnh: "Lung qi and yin deficiency pattern",
  moTa: "Đặc trưng bởi ho yếu, không có đờm, khó thở, thở hổn hển, giọng nói trầm/khàn và ngũ tâm phiền nhiệt. Mạch tế nhược. Chứng này thường là kết quả của Phế khí và Phế âm hư.",
  tenTrung: ["肺气阴两虚证"],
  pinyin: "fèi qì yīn liǎng xū zhèng"
},
{
  stt: 1167,
  tenViet: "Chứng Phế dương hư",
  tenAnh: "Lung yang deficiency pattern",
  moTa: "Đặc trưng bởi thở hổn hển, ho yếu, đàm loãng, trắng, tức ngực, giọng nói trầm, thở nông, khó thở, chân tay lạnh. Lưỡi nhạt, tím, bệu và non mềm, rêu lưỡi trắng, trơn. Mạch trầm trì nhược. Chứng này thường xảy ra khi dương khí không làm ấm được Phế.",
  tenTrung: ["肺阳虚证"],
  pinyin: "fèi yáng xū"
},
{
  stt: 1168,
  tenViet: "Chứng Phế âm hư",
  tenAnh: "Lung yin deficiency pattern",
  moTa: "Đặc trưng bởi ho khan hoặc ho đờm ít, dính hoặc có đờm vướng máu, miệng và cổ họng khô, giọng khàn, nóng bừng, đỏ bừng mặt và đạo hãn. Lưỡi khô đỏ. Mạch tế sác. Chứng này thường xảy ra khi Phế âm hư sinh nội nhiệt.",
  tenTrung: ["肺阴虚证", "肺阴亏虚证"],
  pinyin: "fèi yīn xū zhèng"
},
{
  stt: 1169,
  tenViet: "Chứng Phế khí hư",
  tenAnh: "Lung qi deficiency pattern",
  moTa: "Đặc trưng bởi ho yếu và thở hổn hển, khó thở nặng hơn khi gắng sức, khạc ra đờm loãng trong, giọng nói trầm, tự hãn, không chịu được gió và dễ bị cảm lạnh. Lưỡi nhợt. Mạch nhược. Chứng này thường là kết quả của Phế khí hư và chức năng Phế giảm.",
  tenTrung: ["肺气虚证", "肺卫气虚不固证", "肺卫气虚证"],
  pinyin: "fèi qì xū zhèng"
},
{
  stt: 1170,
  tenViet: "Chứng Phế thực nhiệt",
  tenAnh: "Excess heat in the lung pattern",
  moTa: "Đặc trưng bởi sốt, khát nước, ho, thở nhanh và thở hổn hển. Đau ngực, đau họng, sổ mũi, táo bón và nước tiểu vàng cũng có thể xuất hiện. Lưỡi đỏ, rêu lưỡi vàng. Mạch sác. Chứng này thường xảy ra khi nhiệt tà tổn thương Phế.",
  tenTrung: ["肺实热证", "肺热壅盛证", "肺热炽盛证"],
  pinyin: "fèi shí rè zhèng"
},
{
  stt: 1171,
  tenViet: "Chứng Phế nhiệt âm hư",
  tenAnh: "Lung heat and yin deficiency pattern",
  moTa: "Đặc trưng bởi sốt, khát nước, ho ít đờm, thở hổn hển, táo bón và nước tiểu vàng. Lưỡi đỏ, rêu lưỡi vàng khô. Mạch sác. Chứng này thường xảy ra khi Phế nhiệt thịnh tích tụ làm hao tổn âm dịch.",
  tenTrung: ["肺热阴虚证", "肺热津伤证", "阴虚肺燥证", "肺燥津亏证"],
  pinyin: "fèi rè yīn xū zhèng"
},
{
  stt: 1172,
  tenViet: "Chứng phong nhiệt phạm Phế",
  tenAnh: "Wind heat attacking the lung pattern",
  moTa: "Đặc trưng bởi ho, thở hổn hển, sốt, hơi sợ gió, đau nhức toàn thân hoặc đau họng, đầu lưỡi đỏ, rêu lưỡi vàng mỏng, mạch phù sác. Chứng này thường xảy ra khi phong nhiệt phạm Phế, ảnh hưởng đến chức năng tuyên phát và túc giáng của Phế khí.",
  tenTrung: ["风热犯肺证"],
  pinyin: "fēng rè fàn fèi zhèng"
},
{
  stt: 1173,
  tenViet: "Chứng đàm nhiệt ủng Phế",
  tenAnh: "Phlegm heat accumulating in the lung pattern",
  moTa: "Đặc trưng bởi sốt, khát nước, ho, thở hổn hển, đàm vàng dính, tức ngực, lưỡi đỏ, rêu vàng nhớt, mạch hoạt sác. Chứng này thường xảy ra khi đàm nhiệt tích tụ trong Phế.",
  tenTrung: ["痰热壅肺证", "痰火壅肺证", "痰火蕴肺证", "痰热蕴肺证", "痰热闭肺证"],
  pinyin: "tán rè yōng fèi zhèng"
},
{
  stt: 1174,
  tenViet: "Chứng đàm thấp uẩn Phế",
  tenAnh: "Phlegm dampness accumulating in the lung pattern",
  moTa: "Đặc trưng bởi ho có nhiều đờm (trắng và dính/đặc/loãng và trong, đặc biệt là vào buổi sáng, ho giảm bớt khi khạc được đờm), tiếng ho nặng, đục, tức ngực, đầy chướng bụng và chán ăn. Rêu lưỡi trắng nhớt, mạch nhu hoạt. Chứng này thường xảy ra khi đàm thấp ảnh hưởng chức năng tuyên phát và túc giáng của Phế khí.",
  tenTrung: ["痰湿蕴肺证", "痰湿阻肺证", "痰湿蕴肺证", "痰浊蕴肺证", "痰浊阻肺证"],
  pinyin: "tán shī yùn fèi zhèng"
},
{
  stt: 1175,
  tenViet: "Chứng đàm ứ trở Phế",
  tenAnh: "Phlegm and blood stasis obstructing the lung pattern",
  moTa: "Đặc trưng bởi ho, thở hổn hển, tức ngực, đau nhói, đàm nhiều hoặc vướng máu, lưỡi tím nhạt, rêu nhớt, mạch huyền sáp. Chứng này thường xảy ra khi huyết ứ và đàm trọc tích tụ ở Phế.",
  tenTrung: ["痰瘀阻肺证", "瘀痰阻肺证"],
  pinyin: "tán yū zǔ fèi zhèng"
},
{
  stt: 1176,
  tenViet: "Chứng phong hàn phạm Phế",
  tenAnh: "Wind cold attacking the lung pattern",
  moTa: "Đặc trưng bởi sợ lạnh, sốt, không ra mồ hôi, ho, tức ngực, thở hổn hển, khạc đờm trắng, rêu lưỡi trắng mỏng, mạch phù căng. Chứng này thường xảy ra khi phong hàn ảnh hưởng đến khả năng tuyên phát của Phế khí.",
  tenTrung: ["风寒袭肺证", "风寒束肺证"],
  pinyin: "fēng hán xí fèi zhèng"
},
{
  stt: 1177,
  tenViet: "Chứng hàn ẩm phục Phế",
  tenAnh: "Cold fluids affecting the lung pattern",
  moTa: "Đặc điểm là ho thường xuyên, ho dữ dội, đờm nhiều, loãng và trắng, thở gấp, tức ngực, nặng có thể thở hổn hển, nằm không thẳng, sốt và sợ lạnh, rêu lưỡi trắng nhớt. Mạch phù căng. Chứng này thường xảy ra khi dịch ẩm ứ đọng kết hợp với ngoại hàn ảnh hưởng đến sự tuyên phát và túc giáng của Phế khí.",
  tenTrung: ["寒饮伏肺证", "寒饮停肺证"],
  pinyin: "hán yǐn fú fèi zhèng"
},
{
  stt: 1178,
  tenViet: "Chứng hàn đàm trở Phế",
  tenAnh: "Cold phlegm obstructing the lung pattern",
  moTa: "Đặc trưng bởi ho, thở hổn hển, có đờm trong cổ họng, đầy tức ngực, đờm trắng, dính hoặc loãng/trong, khó thở khi gắng sức, không thể nằm thẳng, chân tay lạnh và không chịu được lạnh. Cũng có thể có sốt và sợ lạnh, rêu lưỡi trắng nhớt, mạch huyền căng. Chứng này thường xảy ra khi đàm ứ đọng và ngoại hàn ảnh hưởng đến chức năng túc giáng của Phế khí.",
  tenTrung: ["寒痰阻肺证", "寒痰停肺证"],
  pinyin: "hán tán zǔ fèi zhèng"
},
{
  stt: 1179,
  tenViet: "Chứng biểu hàn Phế nhiệt",
  tenAnh: "Exterior cold with lung heat pattern",
  moTa: "Đặc trưng bởi sợ lạnh, sốt, khát nước, không ra mồ hôi, bồn chồn, ho, thở hổn hển, tức ngực, rêu lưỡi vàng xen lẫn trắng, mạch phù sác. Chứng này thường xảy ra khi hàn tà bít tắc phần Vệ và gây ra Phế nhiệt tích lại bên trong.",
  tenTrung: ["表寒肺热证"],
  pinyin: "biǎo hán fèi rè zhèng"
},
{
  stt: 1180,
  tenViet: "Chứng phong táo thương Phế",
  tenAnh: "Wind dryness damaging the lung pattern",
  moTa: "Đặc trưng bởi ho khan hoặc ho có đờm ít, dính hoặc vướng máu, mũi họng khô, miệng khô, đầu lưỡi đỏ, rêu lưỡi vàng mỏng khô, mạch tế sác. Chứng này thường xảy ra khi phong táo tiêu hao tân dịch và ảnh hưởng đến sự tuyên phát và túc giáng của Phế khí.",
  tenTrung: ["风燥伤肺证", "燥邪伤肺证", "燥邪犯肺证"],
  pinyin: "fēng zào shāng fèi zhèng"
},
{
  stt: 1181,
  tenViet: "Chứng lương táo",
  tenAnh: "Cool dryness pattern",
  moTa: "Đặc điểm là rất sợ lạnh, sốt nhẹ, đau đầu, không ra mồ hôi, khô miệng/mũi/họng, ho đờm ít, rêu lưỡi trắng mỏng khô, mạch phù căng. Chứng này thường xảy ra khi lương táo tổn thương Phế.",
  tenTrung: ["凉燥证", "凉燥袭肺证"],
  pinyin: "liáng zào zhèng"
},
{
  stt: 1182,
  tenViet: "Chứng ôn táo",
  tenAnh: "Warm dryness pattern",
  moTa: "Đặc trưng bởi sốt, hơi sợ gió lạnh, ho khan, khát nước, khô da/mũi/họng, nước tiểu ít, vàng, rêu lưỡi vàng mỏng, mạch phù sác. Chứng này thường gặp khi ôn táo tiêu hao âm dịch.",
  tenTrung: ["温燥证", "温燥伤肺证", "温燥袭肺证"],
  pinyin: "wēn zào zhèng"
},
{
  stt: 1183,
  tenViet: "Chứng Phế táo trường bế",
  tenAnh: "Lung dryness affecting the large intestine pattern",
  moTa: "Đặc trưng bởi ho, khát nước, thở hổn hển, táo bón, đầy chướng đau bụng, rêu lưỡi vàng khô, mạch trầm thực. Chứng này thường xảy ra khi Phế táo tiêu hao tân dịch, tắc nghẽn khí Đại trường.",
  tenTrung: ["肺燥肠闭证"],
  pinyin: "fèi zào cháng bì zhèng"
},
{
  stt: 1184,
  tenViet: "Chứng ứ trở Phế lạc",
  tenAnh: "Lung collaterals pattern",
  moTa: "Đặc trưng bởi đau thắt ngực, ho ra máu (ho ra máu đỏ sậm hoặc có cục máu đông), lưỡi tím sẫm hoặc có vết ứ huyết, mạch huyền sáp. Chứng này thường xảy ra khi huyết ứ làm tắc nghẽn Phế lạc.",
  tenTrung: ["瘀阻肺络证"],
  pinyin: "yū zǔ fèi luò zhèng"
},
{
  stt: 1185,
  tenViet: "Chứng trường đạo thấp nhiệt",
  tenAnh: "Damp heat in the intestine pattern",
  moTa: "Đặc trưng bởi đau chướng bụng, tiêu chảy đột ngột, dữ dội, tiêu chảy ra máu, mót rặn, cảm giác đại tiện không hết, phân dính, mùi nồng, cảm giác nóng rát quanh hậu môn, sốt, khát nước, tiểu ít, lưỡi đỏ, rêu lưỡi vàng nhớt, mạch hoạt sác. Chứng này thường xảy ra khi thấp nhiệt bên trong làm tắc nghẽn Đại trường.",
  tenTrung: ["肠道湿热证"],
  pinyin: "cháng dào shī rè zhèng"
},
{
  stt: 1186,
  tenViet: "Chứng Đại trường hư hàn",
  tenAnh: "Deficiency cold in the large intestine pattern",
  moTa: "Đặc điểm là tiêu chảy/kiết lỵ mãn tính, đau bụng âm ỉ, giảm khi gặp ấm và khi ấn, không thể chịu lạnh, chân tay lạnh, lưỡi nhạt, rêu lưỡi trắng trơn, mạch trầm trì nhược. Chứng này thường xảy ra khi dương khí không bảo vệ được Đại trường.",
  tenTrung: ["大肠虚寒证"],
  pinyin: "dà cháng xū hán zhèng"
},
{
  stt: 1187,
  tenViet: "Chứng trường táo tân khuy",
  tenAnh: "Intestinal dryness pattern",
  moTa: "Đặc trưng bởi phân rất khô (như phân cừu), vài ngày mới đi cầu một lần, bụng chướng/đau, sờ thấy khối u ở bụng, khát nước, lưỡi khô, mạch huyền sáp. Chứng này thường xảy ra khi tân dịch không thể nuôi dưỡng Đại trường.",
  tenTrung: ["肠燥津亏证", "大肠液亏证", "大肠津亏证"],
  pinyin: "cháng zào jīn kuī zhèng"
},
{
  stt: 1188,
  tenViet: "Chứng Đại trường nhiệt kết",
  tenAnh: "Heat stagnation in the large intestine pattern",
  moTa: "Đặc trưng bởi sốt, khát nước, táo bón, bụng đầy chướng cứng, đau bụng, lưỡi đỏ, rêu lưỡi vàng khô, mạch trầm sác. Chứng này thường xảy ra khi nội nhiệt tích tụ làm tắc nghẽn khí của Đại trường.",
  tenTrung: ["大肠热结证", "肠道热结证", "肠道实热证", "大肠实热证"],
  pinyin: "dà cháng rè jié zhèng"
},
{
  stt: 1189,
  tenViet: "Chứng huyết hư trường táo",
  tenAnh: "Intestinal dryness due to blood deficiency pattern",
  moTa: "Đặc trưng bởi đại tiện khó khăn, vài ngày mới đi cầu một lần, mặt tái nhợt, có thể đi cầu ra máu, lưỡi nhạt, mạch tế sáp. Chứng này thường xảy ra khi huyết không nuôi dưỡng được Đại trường.",
  tenTrung: ["血虚肠燥证", "血虚肠结证"],
  pinyin: "xuè xū cháng zào zhèng"
},
{
  stt: 1190,
  tenViet: "Chứng âm hư trường táo",
  tenAnh: "Intestinal dryness due to yin deficiency pattern",
  moTa: "Đặc trưng bởi đi cầu khó, phân khô (như phân cừu), vài ngày mới đi cầu một lần, miệng/mũi/họng/da khô, lưỡi khô đỏ, mạch tế sáp sác. Chứng này thường xảy ra khi âm dịch không nuôi dưỡng được Đại trường.",
  tenTrung: ["阴虚肠燥证"],
  pinyin: "yīn xū cháng zào zhèng"
},
{
  stt: 1191,
  tenViet: "Chứng thấp trở trường đạo",
  tenAnh: "Dampness obstructing the large intestine pattern",
  moTa: "Đặc trưng bởi bụng chướng/đau âm ỉ, phân loãng, trong, lỏng hoặc phân dính, nặng mùi, rêu lưỡi trắng trơn, mạch nhu. Chứng này thường xảy ra khi thấp tà ảnh hưởng đến chức năng truyền tống của Đại trường.",
  tenTrung: ["湿阻肠道证"],
  pinyin: "shī zǔ cháng dào zhèng"
},
{
  stt: 1192,
  tenViet: "Chứng hàn trệ Vị trường",
  tenAnh: "Cold retention in the stomach and intestines pattern",
  moTa: "Đặc trưng bởi cảm giác lạnh, đau dữ dội ở vùng dạ dày/bụng, giảm khi gặp ấm, nôn mửa, tiêu chảy phân loãng, trong, sợ lạnh, chân tay lạnh, rêu lưỡi trắng, mạch huyền. Chứng này thường xảy ra khi hàn tà làm tắc nghẽn sự vận hành của khí ở trường vị.",
  tenTrung: ["寒滞胃肠证"],
  pinyin: "hán zhì wèi cháng zhèng"
},
{
  stt: 1193,
  tenViet: "Chứng trường phong thương lạc",
  tenAnh: "Wind damaging intestinal collaterals pattern",
  moTa: "Đặc trưng bởi phân đỏ tươi, phân khô, ngứa xung quanh hậu môn, trường hợp nặng có thể đi cầu ra máu tươi, lưỡi đỏ rêu vàng, mạch huyền. Chứng này thường xảy ra khi phong hỏa tổn thương trường lạc, dẫn đến chảy máu đường ruột.",
  tenTrung: ["肠风伤络证", "风伤肠络证"],
  pinyin: "cháng fēng shāng luò zhèng"
},
{
  stt: 1195,
  tenViet: "Chứng Tỳ khí hư",
  tenAnh: "Spleen qi deficiency pattern",
  moTa: "Đặc trưng bởi ăn ít, bụng chướng, tăng hơn sau khi ăn, đại tiện lỏng, mệt mỏi, lưỡi nhợt rêu trắng, mạch nhược. Chứng này thường xảy ra khi Tỳ khí mất chức năng vận hóa.",
  tenTrung: ["脾气虚证", "脾气亏虚证"],
  pinyin: "pí qì xū zhèng"
},
{
  stt: 1196,
  tenViet: "Chứng Tỳ khí hạ hãm",
  tenAnh: "Spleen qi sinking pattern",
  moTa: "Đặc trưng bởi cảm giác căng tức ở vùng bụng, nặng hơn sau khi ăn. Có thể xuất hiện đi cầu thường xuyên kèm theo cảm giác hậu môn sa xuống, tiêu chảy dai dẳng, sa trực tràng, sa tử cung hoặc nước tiểu đục. Các triệu chứng đi kèm có thể bao gồm khó thở, mệt mỏi, uể oải, ngại nói, chóng mặt, nhìn mờ, sắc mặt nhợt nhạt kém nhuận, chán ăn, phân lỏng, lưỡi nhợt rêu trắng, mạch hoãn nhược. Chứng này thường tiến triển từ Tỳ khí hư nặng và xảy ra khi Tỳ khí không thăng lên được.",
  tenTrung: ["脾气下陷证", "中气下陷证"],
  pinyin: "pí qì xià xiàn zhèng"
},
{
  stt: 1197,
  tenViet: "Chứng Tỳ khí bất cố",
  tenAnh: "Insecurity of spleen qi pattern",
  moTa: "Đặc trưng bởi tiêu chảy kéo dài, khó thở, cảm giác uể oải, chán ăn, chướng bụng. Trường hợp nặng còn có thể đi đại tiện không tự chủ, lưỡi nhợt, mạch nhược. Chứng này thường xảy ra khi Tỳ khí không bảo vệ được ruột.",
  tenTrung: ["脾气不固证"],
  pinyin: "pí qì bù gù zhèng"
},
{
  stt: 1198,
  tenViet: "Chứng Tỳ bất thống huyết",
  tenAnh: "Spleen failing to control blood pattern",
  moTa: "Đặc trưng bởi chảy máu mạn tính, ban xuất huyết, chảy máu tử cung, kinh nguyệt nhiều, kinh nguyệt đến sớm, chán ăn, bụng chướng, phân lỏng, mệt mỏi, lưỡi nhợt, mạch nhược. Chứng này thường xảy ra khi Tỳ khí không giữ được huyết trong mạch.",
  tenTrung: ["脾不统血证", "脾不摄血证"],
  pinyin: "pí bù tǒng xuè zhèng"
},
{
  stt: 1199,
  tenViet: "Chứng Tỳ hư sinh phong",
  tenAnh: "Spleen deficiency generating wind pattern",
  moTa: "Đặc trưng bởi co giật tay/chân nhẹ, chân tay lạnh, thở yếu ớt bằng mũi miệng, ngủ mở mắt. Thường xảy ra khi nôn/tiêu chảy mạn tính hoặc lạm dụng thuốc xổ làm tổn thương Tỳ khí. Ở trẻ em, chứng này xảy ra khi Tỳ Thận hư bẩm sinh sinh nội phong.",
  tenTrung: ["脾虚生风证"],
  pinyin: "pí xū shēng fēng zhèng"
},
{
  stt: 1200,
  tenViet: "Chứng Tỳ dương hư",
  tenAnh: "Spleen yang deficiency pattern",
  moTa: "Đặc điểm là đau bụng do lạnh, giảm khi gặp ấm, nôn ra nước trong, chân tay lạnh, không chịu lạnh, phân lỏng, nước tiểu trong, nhiều, lưỡi nhợt, bệu, non mềm, rêu lưỡi trắng ẩm, mạch trầm trì. Chứng này thường là do Tỳ dương hư kết hợp với nội hàn.",
  tenTrung: ["脾阳虚证", "脾阳亏虚证", "脾阳不足证"],
  pinyin: "pí yáng xū zhèng"
},
{
  stt: 1201,
  tenViet: "Chứng Tỳ âm hư",
  tenAnh: "Spleen yin deficiency pattern",
  moTa: "Đặc trưng bởi chán ăn, chướng bụng, táo bón, sụt cân, mệt mỏi, nước bọt ít, môi khô, sốt nhẹ, lưỡi đỏ rêu ít, mạch tế sác. Chứng này thường xảy ra khi Tỳ âm hư ảnh hưởng đến chức năng vận hóa của Tỳ Vị.",
  tenTrung: ["脾阴虚证", "脾阴亏虚证"],
  pinyin: "pí yīn xū zhèng"
},
{
  stt: 1202,
  tenViet: "Chứng Tỳ hư khí trệ",
  tenAnh: "Spleen deficiency with qi stagnation pattern",
  moTa: "Đặc trưng bởi ăn ít, đau chướng bụng, phân lỏng với cảm giác đại tiện không hết, sôi bụng, trung tiện và mệt mỏi. Mạch huyền. Chứng này thường là do Tỳ khí hư và tắc nghẽn sự vận hành của khí.",
  tenTrung: ["脾虚气滞证"],
  pinyin: "pí xū qì zhì zhèng"
},
{
  stt: 1203,
  tenViet: "Chứng Tỳ hư thủy phiếm",
  tenAnh: "Spleen deficiency with water retention pattern",
  moTa: "Đặc trưng bởi ăn ít, bụng chướng, phân lỏng, mệt mỏi, da nhợt nhạt, mặt sưng phù, cũng có thể có cổ trướng, lưỡi nhợt bệu, rêu trắng trơn, mạch nhu. Chứng này thường xảy ra khi Tỳ khí mất chức năng vận hóa, dẫn đến giữ nước.",
  tenTrung: ["脾虚水泛证", "脾气虚水停证", "脾气虚水湿证"],
  pinyin: "pí xū shuǐ fàn zhèng"
},
{
  stt: 1204,
  tenViet: "Chứng Tỳ dương hư thủy phiếm",
  tenAnh: "Spleen yang deficiency with water retention pattern",
  moTa: "Đặc trưng bởi ăn ít, bụng chướng, phân lỏng, không chịu được lạnh, mặt sưng phù, phù chân. Ngoài ra còn có thể có cổ trướng. Lưỡi nhợt bệu, rêu trắng trơn, mạch nhu nhược. Chứng này thường xảy ra khi Tỳ dương mất chức năng ôn ấm và vận chuyển nên gây giữ nước.",
  tenTrung: ["脾阳虚水泛证", "脾阳虚水停证"],
  pinyin: "pí yáng xū shuǐ fàn zhèng"
},
{
  stt: 1205,
  tenViet: "Chứng Tỳ hư thấp khốn",
  tenAnh: "Spleen deficiency with dampness pattern",
  moTa: "Đặc trưng bởi ăn ít, bụng chướng, phân lỏng, toàn thân nặng nề hoặc phù nề nhẹ, lưỡi nhợt bệu, rêu trắng, ẩm hoặc nhớt, mạch nhu. Chứng này thường là do thấp trọc tích tụ bên trong do Tỳ khí hư.",
  tenTrung: ["脾虚湿困证", "脾虚湿蕴证", "脾虚湿盛证", "脾虚湿泛证"],
  pinyin: "pí xū shī kùn zhèng"
},
{
  stt: 1206,
  tenViet: "Chứng Tỳ hư thấp nhiệt",
  tenAnh: "Spleen deficiency with damp heat pattern",
  moTa: "Đặc trưng bởi ăn ít, bụng chướng, phân lỏng, cảm giác sốt nhưng không sốt, toàn thân nặng nề, lưỡi bệu đỏ, rêu vàng nhớt, mạch hoạt sác. Chứng này thường là do Tỳ khí hư cùng với sự tích tụ thấp nhiệt bên trong.",
  tenTrung: ["脾虚湿热证"],
  pinyin: "pí xū shī rè zhèng"
},
{
  stt: 1207,
  tenViet: "Chứng Tỳ hư đàm thấp",
  tenAnh: "Spleen deficiency with phlegm dampness pattern",
  moTa: "Đặc trưng bởi ăn ít, bụng chướng, phân lỏng, béo phì, cơ thể nặng nề, mệt mỏi, buồn ngủ, lưỡi bệu nhợt, rêu trắng nhớt, mạch nhu. Chứng này thường là do Tỳ khí hư cùng với sự tích tụ đàm thấp bên trong.",
  tenTrung: ["脾虚痰湿证"],
  pinyin: "pí xū tán shī zhèng"
},
{
  stt: 1208,
  tenViet: "Chứng Tỳ hư thực tích",
  tenAnh: "Spleen deficiency with food retention pattern",
  moTa: "Đặc trưng bởi ăn ít, chướng bụng, tiêu chảy thường xuyên, bụng chướng đau thường xuyên, trào ngược axit, cảm giác đại tiện không hết sau khi tiêu chảy và phân có mùi nồng. Lưỡi nhớt, rêu lưỡi nhớt. Chứng này xảy ra khi thức ăn ứ đọng trong trường vị do Tỳ mất chức năng vận hóa.",
  tenTrung: ["脾虚食积证", "脾虚夹食证"],
  pinyin: "pí xū shí jī zhèng"
},
{
  stt: 1209,
  tenViet: "Chứng Tỳ hư huyết khuy",
  tenAnh: "Spleen deficiency with blood deficiency pattern",
  moTa: "Đặc trưng bởi ăn ít, bụng chướng, phân lỏng, chóng mặt, mệt mỏi, vô kinh, chậm kinh, kinh ít, sắc mặt tái nhợt, lưỡi nhợt, mạch tế nhược. Chứng này thường xảy ra khi Tỳ khí không tạo ra đủ huyết.",
  tenTrung: ["脾虚血亏证"],
  pinyin: "pí xū xuè kuī zhèng"
},
{
  stt: 1210,
  tenViet: "Chứng thấp nhiệt khốn Tỳ",
  tenAnh: "Damp heat affecting the spleen pattern",
  moTa: "Đặc trưng bởi đầy bụng, chán ăn, buồn nôn, nôn, phân lỏng có cảm giác đại tiện không hết, cơ thể nặng nề, khát nước nhưng uống ít, cảm giác sốt (nhưng không sốt) không khỏi sau khi đổ mồ hôi. Lưỡi đỏ, rêu vàng nhớt, mạch nhu sác. Chứng này thường xảy ra khi thấp nhiệt bên trong ảnh hưởng đến chức năng của Tỳ Vị.",
  tenTrung: ["湿热困脾证", "湿热蕴脾证"],
  pinyin: "shī rè kùn pí zhèng"
},
{
  stt: 1211,
  tenViet: "Chứng hàn thấp khốn Tỳ",
  tenAnh: "Cold dampness affecting the spleen pattern",
  moTa: "Đặc trưng bởi chướng căng bụng, cảm giác nhớt trong miệng, chán ăn, buồn nôn, nôn, không vị giác, đau bụng, phân lỏng, đầu và cơ thể nặng nề. Mắt/da vàng sẫm, huyết trắng nhiều và béo phì cũng có thể xuất hiện. Lưỡi nhợt bệu, rêu trắng nhớt, mạch nhu hoãn. Chứng này thường xảy ra khi hàn thấp bên trong làm tắt nghẽn Tỳ dương.",
  tenTrung: ["寒湿困脾证", "寒湿蕴脾证"],
  pinyin: "hán shī kùn pí zhèng"
},
{
  stt: 1212,
  tenViet: "Chứng tư lự thương Tỳ",
  tenAnh: "Worry damaging the spleen pattern",
  moTa: "Đặc trưng bởi lo lắng, nghi hoặc, chóng mặt, mệt mỏi, hồi hộp, rụt rè, mất ngủ, hay quên, chán ăn, sắc mặt nhợt nhạt, lưỡi nhợt, rêu trắng mỏng, mạch tế. Chứng này thường là do khí trệ do suy nghĩ quá nhiều, tinh thần gắng sức quá mức hoặc rối loạn cảm xúc.",
  tenTrung: ["思虑伤脾证", "思伤脾气证"],
  pinyin: "sī lǜ shāng pí zhèng"
},
{
  stt: 1213,
  tenViet: "Chứng Vị khí hư",
  tenAnh: "Stomach qi deficiency pattern",
  moTa: "Đặc trưng bởi dạ dày căng tức, đau âm ỉ, giảm bớt khi xoa ấn hoặc sau khi ăn, chán ăn, mệt mỏi, lưỡi nhợt, non mềm, mạch nhược. Chứng này thường xảy ra khi Vị khí mất chức năng hấp thu và vận chuyển.",
  tenTrung: ["胃气虚证", "胃气亏虚证"],
  pinyin: "wèi qì xū zhèng"
},
{
  stt: 1214,
  tenViet: "Chứng Vị khí thượng nghịch",
  tenAnh: "Ascending of stomach qi pattern",
  moTa: "Đặc trưng bởi nôn mửa, nấc cụt và ợ hơi. Chứng này thường xảy ra khi hàn, nhiệt, ăn kiêng hoặc cảm xúc khiến Vị khí xông lên.",
  tenTrung: ["胃气上逆证"],
  pinyin: "wèi qì shàng nì zhèng"
},
{
  stt: 1215,
  tenViet: "Chứng Vị nhiệt khí nghịch",
  tenAnh: "Heat-induced ascending of stomach qi pattern",
  moTa: "Đặc trưng bởi nôn, nấc, ợ hơi, đau bụng nóng rát, khát nước, lưỡi đỏ rêu vàng, mạch sác. Chứng này thường xảy ra khi hỏa/nhiệt hoặc đồ ăn cay nóng làm rối loạn Vị khí giáng xuống.",
  tenTrung: ["胃热气逆证", "胃火气逆证"],
  pinyin: "wèi rè qì nì zhèng"
},
{
  stt: 1216,
  tenViet: "Chứng Vị hàn khí nghịch",
  tenAnh: "Cold-induced ascending of stomach qi pattern",
  moTa: "Đặc trưng bởi nôn, nấc, ợ hơi, đau lạnh bụng, rêu lưỡi trắng, mạch huyền căng. Chứng này thường xảy ra khi hàn tà làm rối loạn Vị khí giáng xuống.",
  tenTrung: ["胃寒气逆证"],
  pinyin: "wèi hán qì nì zhèng"
},
{
  stt: 1217,
  tenViet: "Chứng Vị âm hư",
  tenAnh: "Stomach yin deficiency pattern",
  moTa: "Đặc trưng bởi khô miệng và cổ họng, đói nhưng không muốn ăn, đau bụng âm ỉ kèm theo cảm giác nóng rát. Có thể có khó chịu/chướng bụng, buồn nôn, nấc và táo bón. Lưỡi đỏ khô. Mạch tế sác. Chứng này thường xảy ra khi âm dịch không nuôi dưỡng được Vị.",
  tenTrung: ["胃阴虚证", "胃阴亏虚证"],
  pinyin: "wèi yīn xū zhèng"
},
{
  stt: 1218,
  tenViet: "Chứng Vị hỏa",
  tenAnh: "Stomach fire pattern",
  moTa: "Đặc trưng bởi đau bụng nóng rát, khát nước, thích uống nước lạnh, nướu sưng đau, chảy máu nướu, táo bón, nước tiểu ít, vàng. Có thể có đói sau ăn, hơi thở có mùi hôi. Lưỡi đỏ, rêu lưỡi vàng. Mạch sác. Chứng này thường xảy ra khi hỏa nhiệt tích tụ ở Vị làm rối loạn Vị khí giáng xuống.",
  tenTrung: ["胃火证", "胃热炽盛证", "胃火炽盛证", "胃实热证", "胃热证"],
  pinyin: "wèi huǒ zhèng"
},
{
  stt: 1219,
  tenViet: "Chứng Vị nhiệt âm hư",
  tenAnh: "Stomach heat with yin deficiency pattern",
  moTa: "Đặc trưng bởi cảm giác đau bụng nóng rát, khát nước, ngũ tâm phiền nhiệt, táo bón, lưỡi khô đỏ rêu ít, mạch tế sác. Chứng này thường xảy ra khi Vị nhiệt tích tụ tiêu hao âm dịch.",
  tenTrung: ["胃热阴虚证"],
  pinyin: "wèi rè yīn xū zhèng"
},
{
  stt: 1220,
  tenViet: "Chứng Vị táo tân thương",
  tenAnh: "Stomach dryness due to loss of fluids pattern",
  moTa: "Đặc trưng bởi khó chịu và đầy tức ở dạ dày, đói nhưng không thèm ăn, khát nước, táo bón và lưỡi khô. Tình trạng này thường xảy ra khi tân dịch không làm ẩm được Vị.",
  tenTrung: ["胃燥津伤证", "胃燥津亏证"],
  pinyin: "wèi zào jīn shāng zhèng"
},
{
  stt: 1221,
  tenViet: "Chứng hàn tà phạm Vị",
  tenAnh: "Cold attacking the stomach pattern",
  moTa: "Đặc trưng bởi lạnh bụng, đau nhức dữ dội, giảm khi gặp ấm, nôn ra nước bọt trong, sợ lạnh, chân tay lạnh, rêu lưỡi trắng, mạch huyền. Chứng này thường xảy ra khi hàn tà làm rối loạn Vị khí giáng xuống.",
  tenTrung: ["寒邪犯胃证"],
  pinyin: "hán xié fàn wèi zhèng"
},
{
  stt: 1222,
  tenViet: "Chứng hàn ẩm đình Vị",
  tenAnh: "Cold fluids retention in the stomach pattern",
  moTa: "Đặc trưng bởi dạ dày có khối, chướng dạ dày, trong bụng có tiếng ọc ạch, nôn ra nước bọt loãng trong, rêu lưỡi trắng trơn, mạch huyền, thường xảy ra khi hàn ẩm tích tụ trong Vị.",
  tenTrung: ["寒饮停胃证", "胃寒饮停证"],
  pinyin: "hán yǐn tíng wèi zhèng"
},
{
  stt: 1223,
  tenViet: "Chứng ứ trở Vị lạc",
  tenAnh: "Stasis obstructing the stomach collaterals pattern",
  moTa: "Đặc điểm là đau nhói bụng như dao đâm, cự án hoặc sờ thấy khối u ở bụng. Một số bệnh nhân có thể nôn ra máu sẫm màu hoặc có cục máu đông. Lưỡi có vết ứ huyết, mạch huyền sáp. Chứng này thường xảy ra khi huyết ứ đọng làm tắc nghẽn Vị lạc.",
  tenTrung: ["瘀阻胃络证"],
  pinyin: "yū zǔ wèi luò zhèng"
},
{
  stt: 1224,
  tenViet: "Chứng Tỳ Vị âm hư",
  tenAnh: "Yin deficiency of the spleen and stomach pattern",
  moTa: "Đặc trưng bởi khô miệng và cổ họng, đói nhưng không muốn ăn, sụt cân và táo bón. Có thể có khó chịu ở dạ dày, đau chướng bụng âm ỉ, buồn nôn và nấc. Lưỡi đỏ khô, mạch tế sác. Chứng này thường xảy ra khi âm dịch không nuôi dưỡng được Tỳ Vị.",
  tenTrung: ["脾胃阴虚证", "中焦阴虚证", "中焦虚热症", "脾胃虚热证"],
  pinyin: "pí wèi yīn xū zhèng"
},
{
  stt: 1225,
  tenViet: "Chứng Tỳ Vị dương hư",
  tenAnh: "Yang deficiency of the spleen and stomach pattern",
  moTa: "Đặc trưng bởi bụng chướng, ăn ít, đau lạnh bụng giảm khi gặp ấm hoặc xoa ấn, không chịu được lạnh, tay chân lạnh, phân lỏng, lưỡi nhợt rêu trắng ẩm, mạch trầm trì nhược. Chứng này thường xảy ra khi dương khí không thể làm ấm Tỳ Vị.",
  tenTrung: ["脾胃阳虚证", "脾胃虚寒证", "中焦阳虚证", "中焦虚寒证"],
  pinyin: "pí wèi yáng xū zhèng"
},
{
  stt: 1226,
  tenViet: "Chứng Tỳ Vị thực nhiệt",
  tenAnh: "Excess heat in the spleen and stomach pattern",
  moTa: "Đặc trưng bởi đau rát dạ dày, giảm bớt sau khi ăn thức ăn có tính mát, sốt, khát nước, đau chướng bụng và táo bón. Cũng có thể xuất hiện hơi thở hôi, miệng loét đỏ, đau, sưng nướu và chảy máu. Lưỡi đỏ rêu vàng, mạch sác. Chứng này thường xảy ra khi hỏa nhiệt tích tụ ở Tỳ Vị.",
  tenTrung: [
    "脾胃实热证",
    "脾胃积热证",
    "脾胃热盛证",
    "中焦实热证",
    "中焦积热证",
    "中焦热盛证"
  ],
  pinyin: "pí wèi shí rè zhèng"
},
{
  stt: 1227,
  tenViet: "Chứng Tỳ Vị thấp nhiệt",
  tenAnh: "Damp heat in the spleen and stomach pattern",
  moTa: "Đặc trưng bởi cảm giác sốt (nhưng không sốt) tăng dần về chiều, có khối/chướng bụng, buồn nôn, nôn, chán ăn, khát nước nhưng uống ít, nước tiểu vàng, phân lỏng. Chứng này thường xảy ra khi thấp nhiệt tổn thương Tỳ Vị.",
  tenTrung: [
    "脾胃湿热证",
    "中焦湿热证"
  ],
  pinyin: "pí wèi shī rè zhèng"
},
{
  stt: 1228,
  tenViet: "Chứng thấp khốn Tỳ Vị",
  tenAnh: "Dampness affecting the spleen and stomach pattern",
  moTa: "Đặc trưng bởi đau bụng, chướng bụng, cảm giác nhớt trong miệng, chán ăn, buồn nôn, nôn, miệng nhạt, không khát, đau bụng, phân lỏng, cảm giác nặng nề ở đầu và toàn thân, có thể có vàng mắt và da. Lưỡi nhợt, sưng phù, rêu trắng nhớt, mạch nhu hoãn. Chứng này thường xảy ra khi thấp trọc trở trệ trung tiêu.",
  tenTrung: [
    "湿困脾胃证"
  ],
  pinyin: "shī kùn pí wèi zhèng"
},
{
  stt: 1229,
  tenViet: "Chứng Tỳ Vị bất hòa",
  tenAnh: "Disharmony between the spleen and stomach pattern",
  moTa: "Đặc trưng bởi đầy hơi, chướng bụng, bụng khó chịu, chán ăn. Ngoài ra, có thể có cảm giác chướng bụng sau khi ăn, phân lỏng, có cảm giác đại tiện không hết, ợ hơi và sôi ruột. Mạch huyền. Chứng này thường xảy ra khi khí của Tỳ Vị ứ trệ.",
  tenTrung: [
    "脾胃不和证",
    "中焦不和证",
    "脾胃气滞证",
    "中焦气滞证"
  ],
  pinyin: "pí wèi bù hé zhèng"
},
{
  stt: 1230,
  tenViet: "Chứng Vị trường thấp nhiệt",
  tenAnh: "Damp heat in the stomach and intestines pattern",
  moTa: "Đặc trưng bởi các khối trong bụng/chướng bụng, nôn mửa, buồn nôn, chán ăn, phân lỏng với cảm giác đại tiện không hết, sốt và khát nước. Có thể có phân có mủ hoặc máu, mót rặn, nôn mửa và tiêu chảy dữ dội. Lưỡi đỏ, rêu vàng nhớt, mạch hoạt sác. Chứng này thường xảy ra khi thấp nhiệt tích tụ ở Vị trường.",
  tenTrung: ["胃肠湿热证"],
  pinyin: "wèi cháng shī rè zhèng"
},
{
  stt: 1231,
  tenViet: "Chứng Vị trường thực nhiệt",
  tenAnh: "Excess heat in the stomach and intestines pattern",
  moTa: "Đặc trưng bởi sốt cao hoặc cảm giác sốt dữ dội vào buổi chiều, đau bụng nóng rát, giảm bớt sau khi ăn thức ăn có tính mát, khát nước, đổ mồ hôi, đau/cứng/chướng bụng, cự án, táo bón, phân có mùi nồng và ít, tiểu vàng. Trường hợp nặng có thể mất ý thức, mê sảng, hưng cảm, ứ phân, tiêu chảy ra nước. Lưỡi đỏ, rêu lưỡi vàng khô hoặc nâu sậm có gai, mạch sác hoặc trầm thực. Chứng này thường xảy ra khi nhiệt thịnh tích tụ ở Vị trường.",
  tenTrung: ["胃肠实热证", "胃肠积热证"],
  pinyin: "wèi cháng shí rè zhèng"
},
{
  stt: 1232,
  tenViet: "Chứng Vị trường khí trệ",
  tenAnh: "Qi stagnation of the stomach and intestines pattern",
  moTa: "Đặc trưng bởi các khối, chướng bụng, đau có thể di chuyển ở dạ dày hoặc bụng, giảm bớt khi ợ hơi hoặc trung tiện. Mạch huyền. Chứng này thường xảy ra khi khí của Vị trường ứ trệ.",
  tenTrung: ["胃肠气滞证"],
  pinyin: "wèi cháng qì zhì zhèng"
},
{
  stt: 1233,
  tenViet: "Chứng Vị trường ứ trệ",
  tenAnh: "Blood stasis in the stomach and intestines pattern",
  moTa: "Đặc trưng bởi đau nhói ở vùng dạ dày hoặc bụng, sờ thấy khối, nôn ra máu, phân có cục máu đông sẫm màu, lưỡi có vết ứ huyết, mạch huyền sáp. Chứng này thường xảy ra khi huyết ứ làm tắc nghẽn Vị trường.",
  tenTrung: ["胃肠瘀滞证", "瘀滞胃肠证"],
  pinyin: "wèi cháng yū zhì zhèng"
},
{
  stt: 1234,
  tenViet: "Chứng đàm thấp trung trở",
  tenAnh: "Phlegm dampness accumulating in the spleen pattern",
  moTa: "Đặc trưng bởi cảm giác nhớt trong miệng, chán ăn, buồn nôn, nôn, có khối trong bụng, chướng bụng, có tiếng ọc ạch trong bụng, đại tiện lỏng. Lưỡi bệu nhợt, rêu trắng nhớt, mạch nhu. Chứng này thường xảy ra khi đàm thấp làm tắc nghẽn Vị trường.",
  tenTrung: [
    "痰湿中阻证",
    "痰浊中阻证",
    "痰饮中阻证",
    "痰湿蕴脾证"
  ],
  pinyin: "tán shī zhōng zǔ zhèng"
},
{
    stt: 1236,
    tenViet: "Chứng Can âm hư",
    tenAnh: "Liver yin deficiency pattern",
    moTa: "Biểu hiện chóng mặt, mờ mắt, khô mắt, thị lực kém, đỏ bừng mặt, ngũ tâm phiền nhiệt. Có thể có đau rát vùng hạ sườn. Lưỡi đỏ rêu ít, mạch tế sác. Chứng này thường xảy ra khi âm dịch không nuôi dưỡng được Can.",
    tenTrung: [
      "肝阴虚证"
    ],
    pinyin: "gān yīn xū zhèng"
  },
  {
    stt: 1237,
    tenViet: "Chứng Can huyết hư",
    tenAnh: "Liver blood deficiency pattern",
    moTa: "Đặc trưng bởi chóng mặt, khô mắt, thị lực kém, tê tay chân, khô móng tay, móng chân, mất ngủ, mộng mị nhiều, lượng kinh ít, sắc kinh nhạt, da và môi nhợt nhạt, trường hợp nặng có thể xuất hiện vô kinh. Lưỡi nhợt, mạch tế. Chứng này thường xảy ra khi huyết không nuôi dưỡng được Can.",
    tenTrung: [
      "肝血虚证"
    ],
    pinyin: "gān xuè xū zhèng"
  },
{
    stt: 1238,
    tenViet: "Chứng Can khí hư",
    tenAnh: "Liver qi deficiency pattern",
    moTa: "Đặc trưng bởi vùng hạ sườn căng cứng, khí sắc kém, mệt mỏi, khó thở, chóng mặt, mờ mắt, lưỡi nhợt, mạch nhược. Chứng này thường xảy ra khi dương khí suy hư, Can không duy trì được sự vận hành của khí.",
    tenTrung: [
      "肝气虚证",
      "肝阳亏虚证"
    ],
    pinyin: "gān qì xū zhèng"
  },
  {
    stt: 1239,
    tenViet: "Chứng Can dương thượng kháng",
    tenAnh: "Hyperactivity of liver yang pattern",
    moTa: "Biểu hiện chóng mặt, mờ mắt, ù tai, đau thắt lưng, tê chân tay, ngũ tâm phiền nhiệt, đỏ bừng mặt, bồn chồn, dễ kích thích, miệng khô đắng, lưỡi đỏ rêu ít, mạch tế sác. Chứng này thường xảy ra khi Can âm không chế được Can dương.",
    tenTrung: [
      "肝阳上亢证"
    ],
    pinyin: "gān yáng shàng kàng zhèng"
  },
  {
    stt: 1240,
    tenViet: "Chứng Can uất khí trệ",
    tenAnh: "Liver qi stagnation pattern",
    moTa: "Đặc trưng bởi tình chí uất ức, thở dài thường xuyên, căng tức/đau di chuyển ở ngực, vùng hạ sườn hoặc hai bên bụng dưới, căng/đau vú ở phụ nữ và kinh nguyệt không đều, mạch huyền. Chứng này thường xảy ra khi Can mất sự điều đạt khí.",
    tenTrung: [
      "肝郁气滞证",
      "肝郁证"
    ],
    pinyin: "gān yù qì zhì zhèng"
  },
  {
    stt: 1241,
    tenViet: "Chứng Can uất huyết hư",
    tenAnh: "Liver qi stagnation with blood deficiency pattern",
    moTa: "Đặc trưng bởi các biểu hiện chóng mặt, mờ mắt, căng tức vùng hạ sườn, tình chí uất ức, mộng mị nhiều, trí nhớ kém, sắc mặt tím nhạt, mạch huyền tế. Chứng này thường do huyết hư và Can khí uất.",
    tenTrung: [
      "肝郁血虚证"
    ],
    pinyin: "gān yù xuè xū zhèng"
  },
  {
    stt: 1242,
    tenViet: "Chứng Can uất huyết ứ",
    tenAnh: "Liver qi stagnation with blood stasis pattern",
    moTa: "Đặc trưng bởi đau căng tức hoặc như dao đâm ở vùng sườn, vùng hạ sườn hoặc có khối ở vùng bụng dưới, tình chí uất ức, lưỡi tím sẫm hoặc có vết ứ huyết, mạch huyền sáp. Chứng này thường xảy ra khi Can khí uất gây huyết ứ.",
    tenTrung: [
      "肝郁血瘀证"
    ],
    pinyin: "gān yù xuè yū zhèng"
  },
{
    stt: 1243,
    tenViet: "Chứng Can uất âm hư",
    tenAnh: "Liver qi stagnation with yin deficiency pattern",
    moTa: "Đặc trưng bởi đau căng tức hoặc nóng rát vùng hạ sườn, ngũ tâm phiền nhiệt, chóng mặt, nhìn mờ, miệng khô đắng, lưỡi đỏ sậm, rêu ít, mạch huyền tế. Chứng này thường xảy ra do Can khí uất và Can âm hư.",
    tenTrung: [
      "肝郁阴虚证"
    ],
    pinyin: "gān yù yīn xū zhèng"
  },
  {
    stt: 1244,
    tenViet: "Chứng Can ứ hóa nhiệt",
    tenAnh: "Liver qi stagnation transforming into heat pattern",
    moTa: "Đặc trưng bởi cảm giác nóng rát, đau như dao đâm/có khối ở vùng hạ sườn, cự án, miệng khô, đắng, lưỡi tím sẫm hoặc có vết ứ huyết, rêu vàng, mạch huyền sáp. Chứng này thường xảy ra khi Can khí uất kéo dài và Can huyết ứ hóa nhiệt.",
    tenTrung: [
      "肝瘀化热证"
    ],
    pinyin: "gān yū huà rè zhèng"
  },
  {
    stt: 1245,
    tenViet: "Chứng Can huyết ứ trệ",
    tenAnh: "Liver blood stasis pattern",
    moTa: "Đặc điểm là đau nhói/khối có vị trí cố định ở vùng hạ sườn, cự án, lưỡi tím sẫm hoặc có vết ứ huyết, mạch huyền sáp. Chứng này thường xảy ra khi huyết ứ làm tắc nghẽn Can lạc.",
    tenTrung: [
      "肝血瘀滞证",
      "肝血瘀阻证"
    ],
    pinyin: "gān xuè yū zhì zhèng"
  },
  {
    stt: 1246,
    tenViet: "Chứng Can uất hóa hỏa",
    tenAnh: "Liver qi stagnation transforming into fire pattern",
    moTa: "Đặc trưng bởi đau căng vùng hạ sườn, bồn chồn, dễ kích thích, miệng khô đắng, nước tiểu vàng sậm, lưỡi đỏ rêu vàng, mạch huyền sác. Chứng này thường xảy ra khi Can khí uất kéo dài hóa nhiệt/hỏa.",
    tenTrung: [
      "肝郁化火证",
      "气郁化火证"
    ],
    pinyin: "gān yù huà huǒ zhèng"
  },
{
  stt: 1247,
  tenViet: "Chứng Can uất đàm hỏa",
  tenAnh: "Liver stagnation with phlegm fire pattern",
  moTa: "Đặc trưng bởi đau căng tức hoặc nóng rát vùng hạ sườn, bồn chồn, dễ kích thích, mất ngủ, mộng mị nhiều, chóng mặt, đau đầu và khạc đàm vàng, lưỡi đỏ rêu vàng nhớt, mạch huyền sác. Chứng này thường xảy ra do Can khí uất và tích tụ đàm nhiệt bên trong.",
  tenTrung: [
    "肝郁痰火证",
    "肝郁痰热证"
  ],
  pinyin: "gān yù tán huǒ zhèng"
},
{
    stt: 1248,
    tenViet: "Chứng Can ứ đàm kết",
    tenAnh: "Liver stagnation with phlegm retention pattern",
    moTa: "Đặc trưng bởi các khối, căng tức hoặc đau nhói vùng hạ sườn, có đờm ở họng, lưỡi tím hoặc vết ứ huyết, rêu nhớt, mạch huyền sáp. Chứng này thường xảy ra khi khí uất và đàm tích tụ ở Can.",
    tenTrung: ["肝瘀痰结证", "肝瘀痰阻证"],
    pinyin: "gān yū tán jié zhèng"
  },
  {
    stt: 1249,
    tenViet: "Chứng Can hỏa thượng viêm",
    tenAnh: "Upward flaming of liver fire pattern",
    moTa: "Đặc trưng bởi sốt, khát nước, bồn chồn, mất ngủ, đau đầu, ngoài ra còn có thể có mắt đỏ sưng đau, ù tai/điếc đột ngột, nôn ra máu, chảy máu cam, mặt đỏ, lưỡi đỏ rêu vàng, mạch huyền sác. Chứng này thường xảy ra khi Can hỏa nghịch lên.",
    tenTrung: ["肝火上炎证"],
    pinyin: "gān huǒ shàng yán zhèng"
  },
  {
    stt: 1250,
    tenViet: "Chứng Can nhiệt động phong",
    tenAnh: "Liver heat stirring wind pattern",
    moTa: "Đặc trưng bởi sốt cao, khát nước, mất ý thức, mê sảng, chân tay co giật, tê liệt, lưỡi đỏ rêu vàng, mạch sác. Chứng này thường xuất hiện khi nhiệt thịnh sinh phong.",
    tenTrung: ["肝热动风证"],
    pinyin: "gān rè dòng fēng zhèng"
  },
  {
    stt: 1251,
    tenViet: "Chứng Can kinh phong động",
    tenAnh: "Wind heat affecting the liver meridian pattern",
    moTa: "Đặc trưng bởi sốt, hơi sợ gió và/hoặc lạnh, đau đầu từng cơn. Có thể có mắt đỏ, sưng tấy, đau nhức. Rêu lưỡi vàng mỏng, mạch phù sác. Chứng này thường xảy ra khi phong nhiệt tà xâm phạm kinh Can.",
    tenTrung: ["肝经风热证"],
    pinyin: "gān jīng fēng rè zhèng"
  },
  {
    stt: 1252,
    tenViet: "Chứng Can kinh thấp nhiệt",
    tenAnh: "Damp heat affecting the liver meridian pattern",
    moTa: "Đặc trưng bởi đau căng vùng hạ sườn, ngứa, sưng đau cơ quan sinh dục ngoài hoặc ra dịch âm đạo vàng dính, có thể có đau tai kèm theo chảy mủ, lưỡi đỏ rêu vàng nhớt, mạch hoạt sác. Chứng này thường xảy ra khi thấp nhiệt tổn thương kinh Can.",
    tenTrung: ["肝经湿热证"],
    pinyin: "gān jīng shī rè zhèng"
  },
 {
    stt: 1253,
    tenViet: "Chứng Can uất thấp nhiệt",
    tenAnh: "Liver qi stagnation with damp heat retention pattern",
    moTa: "Đặc trưng bởi đau căng vùng hạ sườn, khát nước, miệng đắng, có thể có vàng da và mắt, lưỡi đỏ rêu vàng nhớt, mạch hoạt sác. Chứng này thường do thấp nhiệt tích tụ bên trong, kèm theo Can khí uất.",
    tenTrung: ["肝郁湿热证", "肝滞湿热证"],
    pinyin: "gān yù shī rè zhèng"
  },
  {
    stt: 1254,
    tenViet: "Chứng nhiệt độc ứ Can",
    tenAnh: "Heat toxin affecting the liver pattern",
    moTa: "Đặc trưng bởi cảm giác đau rát hoặc nổi cục ở vùng hạ sườn, sốt cao, khát nước, da và mắt vàng, mặt đỏ, trường hợp nặng có thể mất ý thức, lưỡi đỏ rêu vàng, mạch huyền sác. Chứng này thường xảy ra khi hỏa/nhiệt độc vẫn còn trong Can.",
    tenTrung: ["热毒淤肝证", "热毒瘀肝证"],
    pinyin: "rè dú yū gān zhèng"
  },
  {
    stt: 1255,
    tenViet: "Chứng Can nhiệt huyết ứ",
    tenAnh: "Liver heat with blood stagnation pattern",
    moTa: "Đặc trưng bởi đau nhói vùng hạ sườn, có cảm giác nóng rát, miệng khô đắng, lưỡi đỏ đậm rêu vàng, mạch sáp sác. Chứng này thường do nhiệt tích tụ bên trong và Can huyết ứ.",
    tenTrung: ["肝热血瘀证"],
    pinyin: "gān rè xuè yū zhèng"
  },
  {
    stt: 1256,
    tenViet: "Chứng Can nhiệt âm hư",
    tenAnh: "Liver heat with yin deficiency pattern",
    moTa: "Đặc trưng bởi đau âm ỉ vùng hạ sườn với cảm giác nóng rát, ngũ tâm phiền nhiệt, mất ngủ, mộng mị nhiều, bồn chồn, dễ kích thích, miệng khô đắng, lưỡi đỏ, rêu vàng ít. Mạch huyền tế sác. Chứng này thường do nhiệt tích tụ bên trong và Can âm hư.",
    tenTrung: ["肝热阴虚证"],
    pinyin: "gān rè yīn xū zhèng"
  },
  {
    stt: 1257,
    tenViet: "Chứng hàn trệ Can mạch",
    tenAnh: "Cold retention in the liver meridian pattern",
    moTa: "Đặc trưng bởi đau lạnh cạnh bên vùng bụng dưới, sợ lạnh, lạnh chân tay, ngoài ra có thể đau co thắt bộ phận sinh dục hoặc đau đầu vùng đỉnh, tăng khi lạnh giảm khi nóng, rêu lưỡi trắng, mạch huyền khẩn. Chứng này thường xảy ra khi hàn tà ứ đọng lại trong kinh Can.",
    tenTrung: ["寒滞肝脉证", "寒滞肝经证"],
    pinyin: "hán zhì gān mài zhèng"
  },
{
    stt: 1258,
    tenViet: "Chứng Can phong nội động",
    tenAnh: "Internal stirring of liver wind pattern",
    moTa: "Đặc trưng bởi tứ chi co giật, chóng mặt, run rẩy. Chứng này thường là do phong dương, hỏa nhiệt, âm huyết hư.",
    tenTrung: ["肝风内动证"],
    pinyin: "gān fēng nèi dòng zhèng"
  },
  {
    stt: 1259,
    tenViet: "Chứng Can dương hóa phong",
    tenAnh: "Liver yang transforming into wind pattern",
    moTa: "Đặc trưng bởi chóng mặt, đau đầu có cảm giác căng tức, tê chân tay, ù tai, bồn chồn, cáu kỉnh, mặt đỏ bừng, lưỡi đỏ, mạch nhu động, biểu hiện này thường xảy ra khi gan dương kích động khí gan.",
    tenTrung: ["肝阳化风证"],
    pinyin: "gān yáng huà fēng zhèng"
  },
  {
    stt: 1260,
    tenViet: "Chứng Can khí thượng nghịch",
    tenAnh: "Ascending of liver qi pattern",
    moTa: "Đặc trưng bởi chóng mặt, đau đầu, tức ngực, đỏ bừng mặt, ù tai, điếc và đau di chuyển ở vùng hạ sườn. Triệu chứng liên quan đến cảm xúc, trường hợp nặng người bệnh có thể nôn ra máu hoặc kinh nguyệt không đều. Chứng này thường xảy ra khi rối loạn cảm xúc khiến Can khí uất và nghịch lên.",
    tenTrung: ["肝气上逆证"],
    pinyin: "gān qì shàng nì zhèng"
  },
  {
    stt: 1261,
    tenViet: "Chứng Can khí phạm Tỳ",
    tenAnh: "Liver qi affecting the spleen pattern",
    moTa: "Đặc trưng bởi chóng mặt, dễ kích thích, đắng miệng, tức ngực, đau vùng hạ sườn, đầy chướng bụng sau khi ăn và đi ngoài phân lỏng, mạch huyền hoãn. Chứng này thường xảy ra khi Can khí động tổn thương đến Tỳ.",
    tenTrung: ["肝气犯脾证"],
    pinyin: "gān qì fàn pí zhèng"
  },
  {
    stt: 1262,
    tenViet: "Chứng Đởm khí hư",
    tenAnh: "Gallbladder qi deficiency pattern",
    moTa: "Đặc trưng bởi cảm giác hốt hoảng hoặc dễ giật mình, hồi hộp, mất ngủ, ác mộng, khó thở, tự hãn, ù tai, mờ mắt, phù chân tay, miệng nhạt khi ăn, bồn chồn, lưỡi nhạt rêu nhớt, mạch trầm hoãn. Chứng này thường là do Đởm khí hư và rối loạn chức năng của tạng phủ.",
    tenTrung: ["胆气虚证", "胆气亏虚证"],
    pinyin: "dǎn qì xū zhèng"
  },
{
    stt: 1263,
    tenViet: "Chứng Đởm thực nhiệt",
    tenAnh: "Excess heat in the gallbladder pattern",
    moTa: "Đặc trưng bởi củng mạc, da và nước tiểu vàng, đau căng vùng hạ sườn, nôn ra mật, đau đầu, chóng mặt, đắng miệng, họng khô, đau. Chứng này thường xảy ra khi thấp nhiệt tích tụ ở Đởm.",
    tenTrung: ["胆实热证"],
    pinyin: "dǎn shí rè zhèng"
  },
  {
    stt: 1264,
    tenViet: "Chứng Đởm nhiệt đàm nhiễu",
    tenAnh: "Gallbladder heat with phlegm disturbance pattern",
    moTa: "Đặc điểm là miệng đắng, bồn chồn, rụt rè, hốt hoảng hoặc dễ giật mình, căng tức hạ sườn, mất ngủ, mộng mị nhiều, chóng mặt, miệng đắng, lưỡi đỏ rêu vàng nhớt, mạch huyền sác. Chứng này thường là do Đởm nhiệt kết hợp với tình trạng tích tụ đàm bên trong.",
    tenTrung: ["胆热痰扰证"],
    pinyin: "dǎn rè tán rǎo zhèng"
  },
  {
    stt: 1265,
    tenViet: "Chứng Đởm uất đàm nhiễu",
    tenAnh: "Gallbladder stagnation with phlegm disturbance pattern",
    moTa: "Biểu hiện bồn chồn, rụt rè, hốt hoảng hoặc dễ giật mình, mất ngủ, mộng mị nhiều, đầy tức vùng hạ sườn, thở dài nhiều lần, chóng mặt, buồn nôn, nôn, nôn ra đàm và nước bọt, rêu lưỡi trắng nhớt, mạch huyền hoãn. Chứng này thường xảy ra khi đàm trọc ứ đọng bên trong làm cản trở sự phân tán của Đởm khí.",
    tenTrung: ["胆郁痰扰证"],
    pinyin: "dǎn yù tán rǎo zhèng"
  },
  {
    stt: 1266,
    tenViet: "Chứng Đởm phủ trùng nhiễu",
    tenAnh: "Parasitic roundworms disturbing the gallbladder pattern",
    moTa: "Đặc trưng bởi đau dữ dội vùng bụng trên, sắc mặt tái nhợt, chân tay lạnh, nôn ra nước bọt đắng hoặc giun, mạch huyền. Chứng này thường xảy ra khi giun quấy rối Đởm.",
    tenTrung: ["胆腑虫扰证"],
    pinyin: "dǎn fǔ chóng rǎo zhèng"
  },
  {
    stt: 1267,
    tenViet: "Chứng Can Đởm thấp nhiệt",
    tenAnh: "Damp heat in the liver and gallbladder pattern",
    moTa: "Đặc trưng bởi da và mắt vàng, sốt, miệng đắng, đau căng hoặc có khối ở vùng hạ sườn, chán ăn, buồn nôn, nôn, sợ đồ ăn dầu mỡ, nước tiểu vàng, lưỡi đỏ rêu vàng nhớt, mạch hoạt sác. Chứng này thường xảy ra khi thấp nhiệt bên trong ảnh hưởng đến lưu thông khí của Can Đởm.",
    tenTrung: ["肝胆湿热证"],
    pinyin: "gān dǎn shī rè zhèng"
  },
{
  stt: 1268,
  tenViet: "Chứng Đởm kinh uất nhiệt",
  tenAnh: "Stagnant heat in the gallbladder meridian pattern",
  moTa: "Biểu hiện bồn chồn, dễ kích thích, căng tức vùng hạ sườn, miệng đắng, căng/đau tai, ù tai, đau đầu một bên, mất ngủ và mộng mị nhiều, lưỡi đỏ rêu vàng, mạch huyền sác. Chứng này thường xảy ra khi nội hỏa/nhiệt vẫn còn trong kinh Đởm.",
  tenTrung: ["胆经郁热证"],
  pinyin: "dǎn jīng yù rè zhèng"
},
{
    stt: 1270,
    tenViet: "Chứng Thận hư",
    tenAnh: "Kidney deficiency pattern",
    moTa: "Đặc trưng bởi đau mỏi thắt lưng, đau lưng, chóng mặt, mất ngủ, trí nhớ kém, giảm thính lực, giảm ham muốn tình dục và chức năng sinh sản. Chứng này thường do tiên thiên bất túc, do gắng sức quá mức hoặc mắc các bệnh mạn tính.",
    tenTrung: ["肾虚证"],
    pinyin: "shèn xū zhèng"
  },
  {
    stt: 1271,
    tenViet: "Chứng Thận khí hư",
    tenAnh: "Kidney qi deficiency pattern",
    moTa: "Đặc trưng bởi đau mỏi thắt lưng, ù tai, giảm ham muốn tình dục, chóng mặt, trí nhớ kém, mạch nhược, thường là do Thận khí hư.",
    tenTrung: ["肾气虚证", "肾气亏虚证"],
    pinyin: "shèn qì xū zhèng"
  },
  {
    stt: 1272,
    tenViet: "Chứng Thận khí bất cố",
    tenAnh: "Kidney qi insecurity pattern",
    moTa: "Đặc trưng bởi đi tiểu gấp, thường xuyên, nước tiểu trong, nhỏ giọt, đại tiểu tiện không tự chủ, bất lực, xuất tinh sớm, kinh nguyệt chảy nhỏ giọt, dọa sẩy thai, ù tai, đau mỏi yếu thắt lưng/đầu gối, mạch nhược, thường xảy ra khi Thận khí suy tổn, không cố nhiếp được.",
    tenTrung: ["肾气不固证", "肾虚不固证"],
    pinyin: "shèn qì bú gù zhèng"
  },
  {
    stt: 1273,
    tenViet: "Chứng Thận hư thủy phiếm",
    tenAnh: "Water retention due to kidney deficiency pattern",
    moTa: "Đặc trưng bởi phù chân, tiểu ít, ù tai, đau mỏi yếu lưng/đầu gối, lưỡi nhợt rêu trắng trơn, mạch nhược, thường xảy ra khi Thận tinh, khí và dương không khí hóa được nước, thì có thể làm cho thủy khí đình tụ lại.",
    tenTrung: ["肾虚水泛证", "肾虚水停证"],
    pinyin: "shèn xū shuǐ fàn zhèng"
  },
{
    stt: 1274,
    tenViet: "Chứng Thận khí hư thủy phiếm",
    tenAnh: "Water retention due to kidney qi deficiency pattern",
    moTa: "Đặc trưng bởi phù chân, tiểu ít, đau mỏi yếu thắt lưng/đầu gối, lưỡi nhạt bệu, rêu trắng trơn, mạch nhược, thường xảy ra khi thận khí không khí hóa được nước, thì có thể làm cho thủy khí đình tụ lại.",
    tenTrung: ["肾气虚水泛证"],
    pinyin: "shèn qì xū shuǐ fàn zhèng"
  },
  {
    stt: 1275,
    tenViet: "Chứng Thận bất nạp khí",
    tenAnh: "Kidney failing to absorb qi pattern",
    moTa: "Đặc trưng bởi khó thở, hụt hơi, thở hổn hển hoặc đổ mồ hôi khi gắng sức, thở ra nhiều hơn hít vào, trường hợp nặng có thể sưng mặt, phù chân, mạch tế hoặc hư phù. Chứng này thường xảy ra khi Thận khí không nạp được Phế khí.",
    tenTrung: ["肾不纳气证"],
    pinyin: "shèn bú nà qì zhèng"
  },
  {
    stt: 1276,
    tenViet: "Chứng Thận dương hư",
    tenAnh: "Kidney yang deficiency pattern",
    moTa: "Đặc trưng bởi không chịu được lạnh, chân tay lạnh (đặc biệt là vùng thắt lưng và gối), nước da sáng, nhợt nhạt hoặc tối, nước tiểu nhiều, trong, tiểu nhiều về đêm, lưỡi nhợt, mạch nhược. Chứng này thường xuất hiện khi Thận dương không làm ấm được cơ thể.",
    tenTrung: ["肾阳虚证"],
    pinyin: "shèn yáng xū zhèng"
  },
  {
    stt: 1277,
    tenViet: "Chứng Thận âm hư",
    tenAnh: "Kidney yin deficiency pattern",
    moTa: "Đặc trưng bởi đau mỏi và yếu vùng thắt lưng/đầu gối, mệt mỏi, chóng mặt, mờ mắt, điếc, ù tai, tiểu đêm, khô miệng, đau họng, đỏ bừng mặt, ngũ tâm phiền nhiệt, triều nhiệt về chiều. Lưỡi đỏ, không có rêu hoặc rêu ít, mạch tế sác. Chứng này thường do Thận âm hư.",
    tenTrung: ["肾阴虚证", "肾阴虚热证"],
    pinyin: "shèn yīn xū zhèng"
  },
{
    stt: 1278,
    tenViet: "Chứng Thận tinh khuy hư",
    tenAnh: "Kidney essence deficiency pattern",
    moTa: "Đặc trưng bởi trẻ em chậm lớn, chức năng sinh sản giảm, lão hóa sớm, ù tai, rụng tóc, răng lung lay, trí nhớ kém. Chứng này thường là do Thận tinh hư.",
    tenTrung: ["肾精亏虚证", "肾气亏虚证", "肾精不足证"],
    pinyin: "shèn jīng kuī xū zhèng"
  },
  {
    stt: 1279,
    tenViet: "Chứng Thận hư tủy khuy",
    tenAnh: "Kidney marrow deficiency pattern",
    moTa: "Đặc trưng bởi chậm tăng trưởng và phát triển, gãy xương chậm lành, đau mỏi và yếu vùng thắt lưng/đầu gối, chóng mặt, ù tai, trí nhớ kém và sa sút trí tuệ. Chứng này thường là do Thận tinh/tủy hư.",
    tenTrung: ["肾虚髓亏证"],
    pinyin: "shèn xū suǐ kuī zhèng"
  },
  {
    stt: 1280,
    tenViet: "Chứng Thận âm dương lưỡng hư",
    tenAnh: "Deficiency of kidney yin and yang pattern",
    moTa: "Đặc trưng bởi đau mỏi thắt lưng, đau lưng, chóng mặt, mất ngủ, trí nhớ kém, giảm thính lực, giảm ham muốn tình dục và chức năng sinh sản giảm sút. Chứng này thường do tiên thiên bất túc, do gắng sức quá mức hoặc mắc các bệnh mạn tính.",
    tenTrung: ["肾阴阳两虚证"],
    pinyin: "shèn yīn yáng liǎng xū zhèng"
  },
  {
    stt: 1281,
    tenViet: "Chứng Thận hư hàn thấp",
    tenAnh: "Cold dampness due to kidney deficiency pattern",
    moTa: "Đặc trưng bởi thắt lưng/đầu gối nặng nề, đau nhức, cảm giác lạnh, cử động hạn chế, không chịu được lạnh, chân tay lạnh, rêu lưỡi trắng trơn, mạch nhu hoãn. Chứng này thường xảy ra khi hàn thấp ứ đọng ở kinh Thận.",
    tenTrung: ["肾虚寒湿证", "肾经寒湿证"],
    pinyin: "shèn xū hán shī zhèng"
  },
{
    stt: 1282,
    tenViet: "Chứng thấp nhiệt uẩn Thận",
    tenAnh: "Damp heat accumulating in the kidney pattern",
    moTa: "Đặc trưng bởi cảm giác căng nóng rát vùng thắt lưng, tiểu khó, tiểu buốt, tiểu ra máu (có thể tiểu mủ), sốt, khát nước hoặc dịch âm đạ vàng, dính, lưỡi đỏ rêu vàng nhớt, mạch hoạt sác. Chứng này thường xảy ra khi thấp nhiệt ứ đọng ở Thận.",
    tenTrung: ["湿热蕴肾证"],
    pinyin: "shī rè yùn shèn zhèng"
  },
  {
    stt: 1283,
    tenViet: "Chứng Bàng quang thấp nhiệt",
    tenAnh: "Damp heat in the urinary bladder pattern",
    moTa: "Đặc trưng bởi tiểu gấp, tiểu thường xuyên, đau kèm nóng rát khi tiểu, sốt, khát nước, ngoài ra nước tiểu đục hoặc có sỏi, lưỡi đỏ rêu vàng nhớt, mạch hoạt sác. Chứng này thường hay xảy ra khi thấp nhiệt tích tụ ở Bàng quang.",
    tenTrung: ["膀胱湿热证"],
    pinyin: "páng guāng shī rè zhèng"
  },
  {
    stt: 1284,
    tenViet: "Chứng Bàng quang uẩn nhiệt",
    tenAnh: "Heat accumulating in the urinary bladder pattern",
    moTa: "Đặc trưng bởi vùng bụng dưới cứng, đầy và co rút, tiểu nóng, đau, sốt không sợ lạnh, hưng cảm, thường xảy ra khi nhiệt xâm phạm Bàng quang.",
    tenTrung: ["膀胱蕴热证", "膀胱实热证", "膀胱积热证", "膀胱蓄热证"],
    pinyin: "páng guāng yùn rè zhèng"
  },
  {
    stt: 1285,
    tenViet: "Chứng Thái dương súc thủy",
    tenAnh: "Taiyang water retention pattern",
    moTa: "Đặc trưng bởi bụng dưới chướng, căng, đau và bí tiểu. Chứng này thường xảy ra khi chức năng khí hóa của bàng quang bị rối loạn dẫn đến ứ nước.",
    tenTrung: ["太阳蓄水证", "膀胱蓄水证"],
    pinyin: "tài yáng xù shuǐ zhèng"
  },
{
    stt: 1286,
    tenViet: "Chứng Thái dương súc huyết",
    tenAnh: "Taiyang blood retention pattern",
    moTa: "Đặc điểm bụng dưới chướng, đau nhói một chỗ cố định, đi tiểu bình thường, lưỡi tím với vết ứ huyết, mạch huyền sáp. Chứng này thường do chấn thương bụng hoặc khi nhiệt tổn thương Bàng quang khiến huyết ứ trong Bàng quang.",
    tenTrung: ["太阳蓄血证", "膀胱蓄血证"],
    pinyin: "tài yáng xù xuè zhèng"
  },
  {
    stt: 1287,
    tenViet: "Chứng Bàng quang hư hàn",
    tenAnh: "Deficiency cold of the urinary bladder pattern",
    moTa: "Đặc trưng bởi không chịu được lạnh, chân tay lạnh, đau lạnh bụng dưới, tiểu không tự chủ, bí tiểu, tiểu nhiều về đêm, nước tiểu trong, nhiều, rêu lưỡi trắng trơn. Chứng này thường xảy ra khi Thận dương mất chức năng sưởi ấm Bàng quang.",
    tenTrung: ["膀胱虚寒证"],
    pinyin: "páng guāng xū hán zhèng"
  },
  {
    stt: 1288,
    tenViet: "Chứng Bàng quang thất ước",
    tenAnh: "Qi failing to secure the urinary bladder pattern",
    moTa: "Đặc điểm là thường xuyên buồn tiểu nhưng không đi tiểu được, nước tiểu trắng, bụng dưới căng cứng, cảm giác hậu môn bị sa xuống, toàn thân nặng nề, mệt mỏi, ngại nói, khó thở, lưỡi nhợt bệu, rêu trắng, mạch tế nhược nhu. Chứng này thường xảy ra khi Thận khí hư không đảm bảo chức năng khí hóa Bàng quang.",
    tenTrung: ["膀胱失约证"],
    pinyin: "páng guāng shī yuē zhèng"
  },
{
  stt: 1290,
  tenViet: "Chứng Tâm Thận bất giao",
  tenAnh: "Disharmony between the heart and kidney pattern",
  moTa: "Đặc trưng bởi hồi hộp, bồn chồn, mất ngủ, ù tai, đau mỏi và yếu thắt lưng/đầu gối, lưỡi đỏ rêu ít, mạch tế sác nhược. Chứng này thường là sự phối hợp giữa Tâm hỏa và Thận thủy không nhịp nhàng.",
  tenTrung: ["心肾不交证", "心肾阴虚证"],
  pinyin: "xīn shèn bù jiāo zhèng"
},
{
    stt: 1291,
    tenViet: "Chứng Tâm Thận dương hư",
    tenAnh: "Yang deficiency of the heart and kidney pattern",
    moTa: "Đặc trưng bởi không chịu được lạnh, chân tay lạnh, hồi hộp từ nhẹ đến nặng, tiểu khó, phù chân, đau mỏi và lạnh thắt lưng/đầu gối, lưỡi tím nhạt, rêu trắng trơn, mạch nhược. Chứng này thường xảy ra khi dương khí của Tâm Thận không thể làm ấm cơ thể.",
    tenTrung: ["心肾阳虚证", "心肾虚寒证"],
    pinyin: "xīn shèn yáng xū zhèng"
  },
  {
    stt: 1292,
    tenViet: "Chứng thủy khí lăng Tâm",
    tenAnh: "Water retention affecting the heart pattern",
    moTa: "Đặc trưng bởi không chịu được lạnh, chân tay lạnh, phù chân, hồi hộp, không thể nằm thẳng, ho ra đờm trắng loãng, lưỡi bệu nhợt, rêu trắng trơn, mạch nhược. Chứng này thường xảy ra khi nước tích tụ (do Tâm Thận dương khí hư) ảnh hưởng đến Tâm.",
    tenTrung: ["水气凌心证"],
    pinyin: "shuǐ qì líng xīn zhèng"
  },
  {
    stt: 1293,
    tenViet: "Chứng Tâm Thận khí hư",
    tenAnh: "Qi deficiency of the heart and kidney pattern",
    moTa: "Đặc trưng bởi cảm giác hồi hộp, khó thở, đau mỏi và yếu vùng thắt lưng/đầu gối, đi tiểu thường xuyên và tiểu nhỏ giọt, lưỡi nhợt, mạch nhược, thường là do Tâm Thận khí hư.",
    tenTrung: ["心肾气虚证"],
    pinyin: "xīn shèn qì xū zhèng"
  },
  {
    stt: 1294,
    tenViet: "Chứng Tâm phế khí hư",
    tenAnh: "Qi deficiency of the heart and lung pattern",
    moTa: "Đặc trưng bởi hồi hộp, ho, khó thở, thở hổn hển, tức ngực, mệt mỏi, lưỡi nhợt, mạch nhược, thường là do Tâm Phế khí hư.",
    tenTrung: ["心肺气虚证"],
    pinyin: "xīn fèi qì xū zhèng"
  },
  {
    stt: 1295,
    tenViet: "Chứng Tâm Phế âm hư",
    tenAnh: "Yin deficiency of the heart and lung pattern",
    moTa: "Đặc trưng bởi cảm giác hồi hộp, ho, ngũ tâm phiền nhiệt, đỏ bừng mặt, đạo hãn, lưỡi đỏ rêu ít, mạch tế sác, thường xảy ra khi Tâm Phế âm hư.",
    tenTrung: ["心肺阴虚证"],
    pinyin: "xīn fèi yīn xū zhèng"
  },
{
    stt: 1296,
    tenViet: "Chứng Tâm Phế dương hư",
    tenAnh: "Yang deficiency of the heart and lung pattern",
    moTa: "Đặc điểm là hồi hộp, ho, không chịu được lạnh, chân tay lạnh, tức ngực, ho ra đờm trắng loãng, lưỡi tím nhạt, mạch nhược, thường là do Tâm Phế dương khí hư.",
    tenTrung: ["心肺阳虚证"],
    pinyin: "xīn fèi yáng xū zhèng"
  },
  {
    stt: 1297,
    tenViet: "Chứng Tâm Phế nhiệt thịnh",
    tenAnh: "Exuberant heat in the heart and lung pattern",
    moTa: "Đặc điểm là thở hổn hển, ho có đờm vàng dính, bồn chồn, mất ngủ, trường hợp nặng có thể mất ý thức, mê sảng. Lưỡi đỏ rêu vàng, mạch sác hữu lực. Chứng này thường xuất hiện khi hỏa/nhiệt thịnh quấy rối Tâm Phế.",
    tenTrung: ["心肺热盛证", "心肺实热证", "心肺火旺证"],
    pinyin: "xīn fèi rè shèng zhèng"
  },
  {
    stt: 1298,
    tenViet: "Chứng Tâm tỳ lưỡng hư",
    tenAnh: "Deficiency of the heart and spleen pattern",
    moTa: "Đặc trưng bởi hồi hộp, mệt mỏi, ăn ít, bụng chướng, phân lỏng, lưỡi nhợt, mạch nhược, thường xảy ra khi Tâm huyết và Tỳ (dương) khí hư.",
    tenTrung: ["心脾两虚证"],
    pinyin: "xīn pí liǎng xū zhèng"
  },
  {
    stt: 1299,
    tenViet: "Chứng Tâm Tỳ khí hư",
    tenAnh: "Qi deficiency of the heart and spleen pattern",
    moTa: "Đặc trưng bởi hồi hộp, mệt mỏi, chóng mặt, trí nhớ kém, ăn ít, bụng chướng, phân lỏng, lưỡi nhợt, mạch nhược, thường do Tâm Tỳ khí hư.",
    tenTrung: ["心脾气虚证"],
    pinyin: "xīn pí qì xū zhèng"
  },
  {
    stt: 1300,
    tenViet: "Chứng Tâm Tỳ dương hư",
    tenAnh: "Yang deficiency of the heart and spleen pattern",
    moTa: "Đặc trưng bởi không chịu được lạnh, chân tay lạnh, hồi hộp, mệt mỏi, ăn ít, bụng chướng, phân lỏng, lưỡi tím nhạt, rêu trắng trơn, mạch nhược. Chứng này thường xảy ra khi ở Tâm Tỳ dương không thể làm ấm cơ thể và vận chuyển nước và thức ăn.",
    tenTrung: ["心脾阳虚证", "心脾虚寒证"],
    pinyin: "xīn pí yáng xū zhèng"
  },
{
    stt: 1301,
    tenViet: "Chứng Tâm Tỳ tích nhiệt",
    tenAnh: "Heat accumulating in the heart and spleen pattern",
    moTa: "Đặc trưng bởi sốt, khát nước, miệng/lưỡi loét đau, lưỡi đỏ rêu vàng, mạch sác hữu lực, thường xảy ra do nhiệt tà tích tụ ở Tâm Tỳ.",
    tenTrung: ["心脾积热证", "心脾实热证"],
    pinyin: "xīn pí jī rè zhèng"
  },
  {
    stt: 1302,
    tenViet: "Chứng Tâm Can hỏa vượng",
    tenAnh: "Fire hyperactivity of the heart and liver pattern",
    moTa: "Đặc trưng bởi sốt, khát nước, bồn chồn, dễ kích thích, mặt đỏ, mắt đỏ, đau hạ sườn, miệng đắng, mất ngủ, mộng mị nhiều, lưỡi đỏ rêu vàng, mạch sác hữu lực. Chứng này thường xảy ra khi hỏa/nhiệt thịnh tổn thương Tâm Can.",
    tenTrung: ["心肝火旺证", "心肝实热证", "心肝热盛证"],
    pinyin: "xīn gān huǒ wàng zhèng"
  },
  {
    stt: 1303,
    tenViet: "Chứng Tâm Can huyết ứ",
    tenAnh: "Blood stasis in the heart and liver pattern",
    moTa: "Đặc trưng bởi đau đầu, đau nhói vùng hạ sườn, hồi hộp, ngoài ra có thể có vô kinh. Lưỡi tím tái hoặc có vết ứ huyết, mạch huyền sáp. Chứng này thường xảy ra khi Tâm Can huyết ứ.",
    tenTrung: ["心肝血瘀证"],
    pinyin: "xīn gān xuè yū zhèng"
  },
  {
    stt: 1304,
    tenViet: "Chứng Tâm Can huyết hư",
    tenAnh: "Blood deficiency of the heart and liver pattern",
    moTa: "Đặc điểm là hồi hộp, mộng mị nhiều, trí nhớ kém, chóng mặt, mờ mắt, đau âm ỉ vùng hạ sườn, lượng kinh ít, sắc mặt/lưỡi/móng tay nhợt nhạt, mạch tế, thường xảy ra khi huyết không nuôi dưỡng được Tâm Can.",
    tenTrung: ["心肝血虚证"],
    pinyin: "xīn gān xuè xū zhèng"
  },
  {
    stt: 1305,
    tenViet: "Chứng Tâm Can âm hư",
    tenAnh: "Yin deficiency of the heart and liver pattern",
    moTa: "Đặc trưng bởi hồi hộp, mất ngủ, ngũ tâm phiền nhiệt, sốt nhẹ, đỏ bừng mặt, chóng mặt, nhìn mờ, lưỡi đỏ rêu ít, mạch tế sác. Chứng này thường xuất hiện khi Tâm Can âm hư sinh hư nhiệt.",
    tenTrung: ["心肝阴虚证"],
    pinyin: "xīn gān yīn xū zhèng"
  },
  {
    stt: 1306,
    tenViet: "Chứng Tâm Đởm khí hư",
    tenAnh: "Qi deficiency of the heart and gallbladder pattern",
    moTa: "Đặc trưng bởi hồi hộp, mất ngủ, rụt rè, hốt hoảng hoặc dễ giật mình, chóng mặt, tức ngực, lưỡi nhợt. Chứng này thường xảy ra do Tâm khí bất túc và Đởm khí khiếp nhược.",
    tenTrung: ["心胆气虚证"],
    pinyin: "xīn dǎn qì xū zhèng"
  },
{
    stt: 1307,
    tenViet: "Chứng Can Thận lưỡng hư",
    tenAnh: "Deficiency of the liver and kidney pattern",
    moTa: "Đặc trưng bởi nước da nhợt nhạt, kém nhuận, môi và móng tay nhợt nhạt, chóng mặt, ù tai, khô mắt, hồi hộp, mất ngủ, mộng mị nhiều, hốt hoảng hoặc dễ giật mình, kinh nguyệt không đều, kinh ít, vô kinh và đau mỏi thắt lưng. Lưỡi đỏ. Mạch tế. Chứng này thường là do bệnh mạn tính hoặc do tuổi tác Can huyết/Thận tinh suy hư.",
    tenTrung: ["肝肾两虚证", "肝肾亏虚证", "肝肾精血亏损证"],
    pinyin: "gān shèn liǎng xū zhèng"
  },
  {
    stt: 1308,
    tenViet: "Chứng Can Thận âm hư",
    tenAnh: "Yin deficiency of the liver and kidney pattern",
    moTa: "Đặc trưng bởi chóng mặt, ù tai, ngũ tâm phiền nhiệt, sốt nhẹ, đỏ bừng mặt, đau vùng hạ sườn, đau mỏi và yếu vùng thắt lưng/đầu gối, lưỡi đỏ rêu ít, mạch tế sác. Chứng này thường xảy ra khi Can Thận âm hư sinh hư nhiệt.",
    tenTrung: ["肝肾阴虚证", "肝肾虚火证"],
    pinyin: "gān shèn yīn xū zhèng"
  },
  {
    stt: 1309,
    tenViet: "Chứng Can Tỳ lưỡng hư",
    tenAnh: "Deficiency of the liver and spleen pattern",
    moTa: "Đặc trưng bởi đau âm ỉ vùng hạ sườn, chóng mặt, mờ mắt, ăn ít, bụng chướng, phân lỏng, thường là do Can Tỳ hư.",
    tenTrung: ["肝脾两虚证"],
    pinyin: "gān pí liǎng xū zhèng"
  },
  {
    stt: 1310,
    tenViet: "Chứng Can Tỳ bất hòa",
    tenAnh: "Disharmony between the liver and spleen pattern",
    moTa: "Đặc trưng bởi cảm giác đau căng tức vùng hạ sườn, tình chí uất ức, chán ăn, bụng chướng, phân lỏng, mạch huyền hoãn. Chứng này thường xảy ra khi Can khí uất đọng ảnh hưởng đến chức năng vận hóa của Tỳ.",
    tenTrung: ["肝脾不和证"],
    pinyin: "gān pí bù hé zhèng"
  },
{
    stt: 1311,
    tenViet: "Chứng Can vượng Tỳ hư",
    tenAnh: "Liver hyperactivity with spleen deficiency pattern",
    moTa: "Đặc trưng bởi đau căng vùng hạ sườn, tình chí uất ức, chán ăn, ăn ít, bụng chướng, phân lỏng. Chứng này thường xảy ra do Can khí uất kết hợp với Tỳ hư.",
    tenTrung: ["肝旺脾虚证", "肝滞脾虚证", "肝郁脾虚证"],
    pinyin: "gān wàng pí xū zhèng"
  },
  {
    stt: 1312,
    tenViet: "Chứng Can Tỳ thấp nhiệt",
    tenAnh: "Damp heat in the liver and spleen pattern",
    moTa: "Đặc trưng bởi tình trạng căng tức vùng hạ sườn, chướng bụng, buồn nôn, và sợ dầu mỡ. Ngoài ra, vàng da và cảm giác đại tiện không hết. Lưỡi đỏ rêu vàng nhớt, mạch huyền hoạt sác. Chứng này thường xảy ra khi thấp nhiệt ảnh hưởng đến sự vận hành của Can khí và sự vận hóa của Tỳ.",
    tenTrung: ["肝脾湿热证", "中焦湿热证"],
    pinyin: "gān pí shī rè zhèng"
  },
  {
    stt: 1313,
    tenViet: "Chứng Can Tỳ khí trệ",
    tenAnh: "Qi stagnation of the liver and spleen pattern",
    moTa: "Đặc trưng bởi cảm giác căng tức vùng hạ sườn, chướng bụng, sôi ruột, có cảm giác đại tiện không hết, mạch huyền, thường là do Can Tỳ khí trệ.",
    tenTrung: ["肝脾气滞证"],
    pinyin: "gān pí qì zhì zhèng"
  },
  {
    stt: 1314,
    tenViet: "Chứng Can Tỳ huyết ứ",
    tenAnh: "Blood stasis of the liver and spleen pattern",
    moTa: "Đặc trưng bởi đau bụng, căng chướng bụng, da có bầm máu hoặc chấm xuất huyết, nổi khối cục ở vùng hạ sườn hoặc đau nhói, cự án, lưỡi sẫm màu hoặc có vết ứ huyết, mạch huyền sáp. Chứng này thường xảy ra khi huyết ứ ảnh hưởng đến Can Tỳ.",
    tenTrung: ["肝脾血瘀证", "肝脾瘀滞证"],
    pinyin: "gān pí xuè yū zhèng"
  },
  {
    stt: 1315,
    tenViet: "Chứng Can Vị bất hòa",
    tenAnh: "Disharmony between the liver and stomach pattern",
    moTa: "Đặc trưng bởi dạ dày căng, đầy đau, chán ăn, ợ hơi, buồn nôn, nôn, chóng mặt, đau hạ sườn, bồn chồn, mạch huyền. Chứng này thường xảy ra khi Can khí uất ảnh hưởng đến chức năng hòa giáng của Vị khí.",
    tenTrung: ["肝胃不和证", "肝胃不调证"],
    pinyin: "gān wèi bù hé zhèng"
  },
{
    stt: 1316,
    tenViet: "Chứng Can Vị nhiệt thịnh",
    tenAnh: "Exuberant heat in the liver and stomach pattern",
    moTa: "Đặc trưng bởi sốt, khát nước, bồn chồn, dễ kích thích, đau vùng hạ sườn, miệng đắng, đau rát dạ dày, lưỡi đỏ rêu vàng, mạch sác hữu lực, thường xảy ra khi hỏa/nhiệt thịnh tổn thương Can Vị.",
    tenTrung: ["肝胃热盛证", "肝胃积热证"],
    pinyin: "gān wèi rè shèng zhèng"
  },
  {
    stt: 1317,
    tenViet: "Chứng Can hỏa phạm Vị",
    tenAnh: "Liver fire affecting the stomach pattern",
    moTa: "Đặc trưng bởi cảm giác đau rát vùng dạ dày và hạ sườn, miệng khô, đắng, táo bón, nước tiểu vàng, lưỡi đỏ rêu vàng, mạch huyền sác. Chứng này thường xảy ra khi Can hỏa ảnh hưởng đến chức năng hòa giáng của Vị khí.",
    tenTrung: ["肝火犯胃证"],
    pinyin: "gān huǒ fàn wèi zhèng"
  },
  {
    stt: 1318,
    tenViet: "Chứng Can khí phạm Vị",
    tenAnh: "Liver qi affecting the stomach pattern",
    moTa: "Đặc trưng bởi nôn mửa, trào ngược axit, ợ hơi nhiều lần, khó chịu dạ dày, đau căng tức ngực và hạ sườn, tăng khi rối loạn cảm xúc, rêu lưỡi trắng mỏng, mạch huyền, thường xảy ra khi Can khí uất ảnh hưởng đến Vị.",
    tenTrung: ["肝气犯胃证", "肝胃气滞证"],
    pinyin: "gān qì fàn wèi zhèng"
  },
  {
    stt: 1319,
    tenViet: "Chứng Can Vị âm hư",
    tenAnh: "Yin deficiency of the liver and stomach pattern",
    moTa: "Đặc điểm là miệng khô, đắng, đau âm ỉ vùng hạ sườn và dạ dày, táo bón, nước tiểu vàng, lưỡi khô đỏ, mạch huyền tế sác, thường là do Can Vị âm hư.",
    tenTrung: ["肝胃阴虚证"],
    pinyin: "gān wèi yīn xū zhèng"
  },
  {
    stt: 1320,
    tenViet: "Chứng Can Vị hư hàn",
    tenAnh: "Deficiency cold of the liver and stomach pattern",
    moTa: "Đặc trưng bởi căng tức vùng hạ sườn, khó chịu dạ dày và cảm giác đau lạnh, giảm khi xoa ấn, ăn ít, lưỡi nhợt, mạch trầm trì, thường do dương khí hư và sự bất hòa giữa Can và Vị.",
    tenTrung: ["肝胃虚寒证"],
    pinyin: "gān wèi xū hán zhèn"
  },
{
    stt: 1321,
    tenViet: "Chứng Can hỏa phạm Phế",
    tenAnh: "Liver fire affecting the lung pattern",
    moTa: "Đặc trưng bởi cảm giác đau rát vùng ngực và hạ sườn, bồn chồn, dễ kích thích, miệng khô đắng, ho dữ dội, nặng có thể ho ra máu, lưỡi đỏ rêu vàng mỏng, mạch huyền sác. Chứng này thường xảy ra khi Can hỏa thịnh ảnh hưởng đến chức năng túc giáng của Phế khí.",
    tenTrung: ["肝火犯肺证"],
    pinyin: "gān huǒ fàn fèi zhèng"
  },
  {
    stt: 1322,
    tenViet: "Chứng Tỳ Phế lưỡng hư",
    tenAnh: "Deficiency of the spleen and lung pattern",
    moTa: "Đặc trưng bởi tiếng ho trầm thấp, đàm loãng, trong, khó thở, thở hổn hển, ăn ít, bụng chướng, phân lỏng, lưỡi nhợt rêu trắng trơn, mạch nhược, thường do Phế Tỳ khí hư.",
    tenTrung: ["脾肺两虚证", "脾肺气虚证"],
    pinyin: "pí fèi liǎng xū zhèng"
  },
  {
    stt: 1323,
    tenViet: "Chứng Tỳ Thận dương hư",
    tenAnh: "Yang deficiency of the spleen and kidney pattern",
    moTa: "Đặc trưng bởi không chịu được lạnh, tay chân lạnh, da sáng nhợt nhạt, đau mỏi thắt lưng, đau lạnh bụng, tiêu chảy mạn tính kèm theo phân có chứa thức ăn không tiêu, ngoài ra còn có thể có phù nề và nước tiểu ít, lưỡi nhợt bệu, rêu trắng trơn, mạch trầm trì nhược. Chứng này thường xảy ra khi Tỳ Thận dương khí hư sinh ra nội hư hàn.",
    tenTrung: ["脾肾阳虚证", "脾肾虚寒证"],
    pinyin: "pí shèn yáng xū zhèng"
  },
  {
    stt: 1324,
    tenViet: "Chứng Tỳ Thận khí hư",
    tenAnh: "Qi deficiency of the spleen and kidney pattern",
    moTa: "Đặc trưng bởi mệt mỏi, khó thở, ăn ít, chướng bụng, đi cầu phân lỏng, tiêu chảy mạn tính, đau mỏi vùng thắt lưng, ù tai, lưỡi nhợt, mạch nhược, thường là do Tỳ Thận khí hư.",
    tenTrung: ["脾肾气虚证"],
    pinyin: "pí shèn qì xū zhèng"
  },
{
    stt: 1325,
    tenViet: "Chứng Tỳ Vị lưỡng hư",
    tenAnh: "Deficiency of the spleen and kidney pattern",
    moTa: "Đặc trưng bởi ăn ít, chướng bụng, đi ngoài phân lỏng, đau mỏi vùng thắt lưng và ù tai. Chứng này thường xảy ra do Tỳ Thận hư.",
    tenTrung: ["脾肾两虚证", "脾肾亏虚证"],
    pinyin: "pí shèn liǎng xū zhèng"
  },
  {
    stt: 1326,
    tenViet: "Chứng Tỳ Thận bất cố",
    tenAnh: "Insecurity of the spleen and kidney pattern",
    moTa: "Đặc trưng bởi nước tiểu đục hoặc tiểu không tự chủ, khó thở, cảm giác sa trệ, lưỡi nhợt, mạch nhược, thường là do tỳ khí hư, thận khí không cố nhiếp được.",
    tenTrung: ["脾肾不固证", "脾肾气虚不固证"],
    pinyin: "pí shèn bú gù zhèng"
  },
  {
    stt: 1327,
    tenViet: "Chứng Phế Thận âm hư",
    tenAnh: "Yin deficiency of the lung and kidney pattern",
    moTa: "Đặc trưng bởi ho ít đờm hoặc đờm vướng máu, họng khô hoặc khàn giọng, đau mỏi yếu thắt lưng/đầu gối, sụt cân, cốt chưng triều nhiệt, đạo hãn, đỏ bừng mặt, lưỡi đỏ rêu ít, mạch tế sác. Chứng này thường xảy ra khi Phế Thận âm hư sinh hư nhiệt.",
    tenTrung: ["肺肾阴虚证"],
    pinyin: "fèi shèn yīn xū zhèng"
  },
  {
    stt: 1328,
    tenViet: "Chứng Phế Thận khí hư",
    tenAnh: "Qi deficiency of the lung and kidney pattern",
    moTa: "Đặc trưng bởi thở ra nhiều hơn hít vào, ho yếu, nặng hơn khi gắng sức, khạc đàm loãng, trong, giọng nói trầm, tự hãn, có thể có rỉ nước tiểu khi ho, lưỡi tím tái, mạch nhược. Chứng này thường là kết quả của Phế Thận khí hư.",
    tenTrung: ["肺肾气虚证"],
    pinyin: "fèi shèn qì xū zhèng"
  },
  {
    stt: 1329,
    tenViet: "Chứng Phế Thận dương hư",
    tenAnh: "Yang deficiency of the lung and kidney pattern",
    moTa: "Đặc trưng bởi không chịu được lạnh, chân tay lạnh, ho nhiều, đờm loãng trong, thở hổn hển, phù chân, tiểu ít, lưỡi nhợt, rêu trắng trơn, mạch nhược. Chứng thường xảy ra khi nước tích tụ (do Thận dương hư) tổn hại đến Phế.",
    tenTrung: ["肺肾阳虚证"],
    pinyin: "fèi shèn yáng xū zhèng"
  },
{
    stt: 1330,
    tenViet: "Chứng Phế Vị phong nhiệt",
    tenAnh: "Wind heat affecting the lung and stomach pattern",
    moTa: "Đặc trưng bởi sốt, khát nước, ho, da nổi mẩn đỏ, lưỡi đỏ rêu vàng mỏng, mạch phù sác. Chứng này thường xảy ra khi phong nhiệt tổn thương Phế Vị.",
    tenTrung: ["肺胃风热证"],
    pinyin: "fèi wèi fēng rè zhèng"
  },
  {
    stt: 1331,
    tenViet: "Chứng Phế Vị hỏa nhiệt",
    tenAnh: "Fire heat in the lung and stomach pattern",
    moTa: "Đặc trưng bởi sốt, khát nước, ra mồ hôi nhiều, ho, thở hổn hển, đau rát vùng dạ dày, táo bón, nước tiểu vàng, lưỡi đỏ rêu vàng, mạch hoạt sác. Chứng này thường xảy ra khi nhiệt thịnh tổn thương Phế Vị.",
    tenTrung: ["肺胃火热证", "肺胃热盛证"],
    pinyin: "fèi wèi huǒ rè zhèng"
  },
  {
    stt: 1332,
    tenViet: "Chứng Phế Vị âm hư",
    tenAnh: "Yin deficiency of the lung and stomach pattern",
    moTa: "Đặc trưng bởi khát muốn uống, ho khan, khó chịu ở dạ dày, sau khi ăn cảm thấy đói nhanh, lưỡi khô đỏ, mạch tế sác, thường là do Phế Vị âm hư.",
    tenTrung: ["肺胃阴虚证", "肺胃津亏证"],
    pinyin: "fèi wèi yīn xū zhèng"
  },
  {
    stt: 1333,
    tenViet: "Chứng Phế nhiệt di trường",
    tenAnh: "Lung heat transmitting to the large intestine pattern",
    moTa: "Đặc trưng bởi sốt, khát nước, ho, thở hổn hển, chướng bụng, táo bón, lưỡi đỏ rêu vàng, mạch sác, thường xảy ra khi Phế nhiệt thịnh truyền xuống Đại trường.",
    tenTrung: ["肺热移肠证"],
    pinyin: "fèi rè yí cháng zhèng"
  },
  {
    stt: 1334,
    tenViet: "Chứng độc hãm Tâm Can",
    tenAnh: "Toxin entering the heart and liver pattern",
    moTa: "Đặc trưng bởi sốt, mất ý thức, mê sảng, chân tay co giật, nổi mẩn tím sẫm. Ngoài ra, có thể chảy máu cam hoặc da tím sẫm, lưỡi đỏ sậm, mạch trầm tế sác. Chứng này thường xảy ra khi độc tà xâm nhập Tâm Can.",
    tenTrung: ["毒陷心肝证"],
    pinyin: "dú xiàn xīn gān zhèng"
  },
  {
    stt: 1335,
    tenViet: "Chứng Can trường khí trệ",
    tenAnh: "Qi stagnation of the liver and large intestine pattern",
    moTa: "Đặc trưng bởi đau căng vùng hạ sườn và bụng, sôi ruột, trung tiện, đau bụng tiêu chảy, hậu môn có cảm giác sa trệ, mạch huyền, thường xảy ra khi Can khí uất ảnh hưởng đến Đại trường.",
    tenTrung: ["肝肠气滞证"],
    pinyin: "gān cháng qì zhì zhèng"
  },
{
    stt: 1337,
    tenViet: "Chứng đàm trở tinh thất",
    tenAnh: "Phlegm obstructing the essence chamber pattern",
    moTa: "Đặc trưng bởi liệt dương, ít tinh, giảm ham muốn tình dục, béo phì, mệt mỏi, lưỡi nhợt rêu trắng nhớt, mạch hoạt, thường xảy ra khi đàm thấp ảnh hưởng đến tinh thất.",
    tenTrung: ["痰阻精室"],
    pinyin: "tán zǔ jīng shì zhèng"
  },
  {
    stt: 1338,
    tenViet: "Chứng tinh thất ứ trở",
    tenAnh: "Stasis obstructing the essence chamber pattern",
    moTa: "Đặc trưng bởi đau nhói ở vùng đáy chậu, có vị trí cố định, cự án. Ngoài ra, có thể có khối u, ít tinh, liệt dương hoặc đau khi xuất tinh. Lưỡi tím sẫm hoặc có vết ứ huyết, mạch huyền sáp. Chứng thường xảy ra khi huyết ứ ảnh hưởng đến tinh thất.",
    tenTrung: ["精室瘀阻证", "瘀阻精室证", "瘀血阻滞精室证"],
    pinyin: "jīng shì yū zǔ zhèng"
  },
{
  stt: 1340,
  tenViet: "Chứng đàm ứ bào cung",
  tenAnh: "Phlegm retention in the uterus pattern",
  moTa: "Đặc trưng bởi dịch âm đạo ra nhiều, màu trắng hoặc vô kinh/vô sinh, béo phì, mệt mỏi, lưỡi nhợt rêu trắng nhớt, mạch hoạt hoặc nhu hoãn, thường xảy ra khi đàm thấp làm tắc nghẽn bào cung.",
  tenTrung: ["痰凝胞宫证", "痰阻胞宫证"],
  pinyin: "tán níng bāo gōng zhèng"
},
{
  stt: 1341,
  tenViet: "Chứng bào cung ứ trở",
  tenAnh: "Blood stasis obstructing the uterus pattern",
  moTa: "Đặc trưng bởi đau nhói ở vùng bụng dưới, có vị trí cố định và cự án, có thể có khối u ở bụng, kinh nguyệt đến trễ với lượng ít, màu tím sẫm và có cục máu đông, có thể có vô kinh hoặc chảy máu tử cung, lưỡi tím sẫm hoặc vết ứ huyết. Mạch huyền sáp. Chứng này thường xảy ra khi huyết ứ ảnh hưởng đến bào cung.",
  tenTrung: ["胞宫瘀阻证", "瘀阻胞宫证"],
  pinyin: "bāo gōng yū zǔ zhèng"
},
{
  stt: 1342,
  tenViet: "Chứng hàn ngưng bào cung",
  tenAnh: "Cold retention in the uterus pattern",
  moTa: "Đặc trưng bởi đau lạnh vùng bụng dưới, giảm bớt khi gặp nóng, có thể có đau bụng kinh, chậm kinh với sắc kinh tím đậm, dịch âm đạo trắng trong loãng và vô sinh, rêu lưỡi trắng, mạch trầm khẩn. Chứng này thường xảy ra khi hàn tà tích tụ ở bào cung.",
  tenTrung: ["寒凝胞宫证"],
  pinyin: "hán níng bāo gōng zhèng"
},
{
  stt: 1343,
  tenViet: "Chứng bào cung hư hàn",
  tenAnh: "Deficiency cold in the uterus pattern",
  moTa: "Đặc trưng bởi không chịu được lạnh, chân tay lạnh, đau lạnh bụng dưới, giảm bớt khi gặp ấm và xoa ấn, sắc kinh nhợt nhạt và lượng kinh ít. Ngoài ra, có thể có dịch tiết âm đạo loãng, trong, vô sinh, sẩy thai và da nhợt nhạt. Lưỡi nhợt, rêu trắng, mạch trầm nhược. Chứng này thường xảy ra khi dương khí không làm ấm được bào cung.",
  tenTrung: ["胞宫虚寒证", "胞宫阳虚证"],
  pinyin: "bāo gōng xū hán zhèng"
},
{
  stt: 1344,
  tenViet: "Chứng bào cung thấp nhiệt",
  tenAnh: "Damp heat in the uterus pattern",
  moTa: "Đặc điểm dịch âm đạo ra nhiều, vàng, dính, hôi, ngứa, loét âm hộ, lưỡi đỏ rêu vàng nhớt, mạch hoạt sác, thường xảy ra khi thấp nhiệt ứ đọng lại trong bào cung.",
  tenTrung: ["胞宫湿热证"],
  pinyin: "bāo gōng shī rè zhèng"
},
{
  stt: 1345,
  tenViet: "Chứng bào cung huyết nhiệt",
  tenAnh: "Blood heat in the uterus pattern",
  moTa: "Đặc trưng bởi vùng bụng dưới đau rát, kinh đến sớm lượng nhiều, đỏ tươi, có thể có dịch âm đạo vàng, dính, hôi, lưỡi đỏ rêu vàng, mạch sác. Chứng này thường xảy ra khi nhiệt tích tụ trong bào cung.",
  tenTrung: ["胞宫血热证", "胞宫积热证"],
  pinyin: "bāo gōng xuè rè zhèng"
},
{
  stt: 1346,
  tenViet: "Chứng Xung Nhâm thất điều",
  tenAnh: "Disharmony between the Chong and Ren pattern",
  moTa: "Đặc trưng bởi kinh nguyệt không đều và chướng đau bụng dưới. Chứng này thường là do rối loạn chức năng của kinh Xung Nhâm.",
  tenTrung: ["冲任失调证", "冲任不调证"],
  pinyin: "chōng rèn shī tiáo zhèng"
},
{
  stt: 1347,
  tenViet: "Chứng Xung Nhâm bất cố",
  tenAnh: "Insecurity of the Chong and Ren pattern",
  moTa: "Đặc trưng bởi kinh nguyệt chảy nhỏ giọt, ngoài ra còn có thể chảy máu tử cung, dịch âm đạo nhiều hoặc sảy thai. Chứng này thường xảy ra khi khí của Xung Nhâm không cố nhiếp được bào cung.",
  tenTrung: ["冲任不固证"],
  pinyin: "chōng rèn bú gù zhèng"
},
{
  stt: 1348,
  tenViet: "Chứng Xung Nhâm ứ trở",
  tenAnh: "Blood stasis obstructing the Chong and Ren pattern",
  moTa: "Đặc trưng bởi kinh nguyệt tím sẫm, có cục máu đông, lưỡi tím sẫm hoặc có vết ứ huyết, mạch trầm huyền, thường xảy ra khi huyết ứ làm tắc nghẽn bào cung. Các yếu tố góp phần có thể bao gồm chăm sóc không đúng cách trong kỳ kinh hoặc sau khi sinh con, cảm nhiễm ngoại tà hoặc rối loạn cảm xúc. Nó cũng có thể tiến triển từ khí trệ của mạch Xung Nhâm.",
  tenTrung: ["冲任瘀阻证"],
  pinyin: "chōng rèn yū zǔ zhèng"
},
{
  stt: 1349,
  tenViet: "Chứng nhiệt nhập huyết thất",
  tenAnh: "Heat entering the blood chamber pattern",
  moTa: "Đặc điểm là vùng bụng dưới đau rát, cự án, kinh nguyệt ra nhiều. Ngoài ra, có thể có vô kinh, sốt, khát nước, bồn chồn. Lưỡi đỏ sẫm rêu vàng, mạch sác. Chứng này thường xảy ra khi nhiệt tà tổn thương huyết thất.",
  tenTrung: ["热入血室证"],
  pinyin: "rè rù xuè shì zhèng"
},
{
  stt: 1351,
  tenViet: "Chứng phong trúng kinh lạc",
  tenAnh: "Wind attacking the meridians pattern",
  moTa: "Đặc trưng bởi da bị tê và ngứa hoặc đột ngột méo lệch mắt và miệng, thường xảy ra khi có phong tà xâm phạm kinh mạch.",
  tenTrung: ["风中经络证"],
  pinyin: "fēng zhòng jīng luò zhèng"
},
{
  stt: 1352,
  tenViet: "Chứng phong đàm nhập lạc",
  tenAnh: "Wind phlegm entering the meridians pattern",
  moTa: "Đặc trưng bởi tê hoặc liệt tứ chi, tê hoặc tê ngứa da, chóng mặt, chảy nước bọt, rêu lưỡi nhớt, thường xảy ra khi Can phong kèm theo đờm ảnh hưởng đến kinh mạch.",
  tenTrung: ["风痰入络证", "风痰阻络证"],
  pinyin: "fēng tán rù luò zhèng"
},
{
  stt: 1353,
  tenViet: "Chứng phong nhiệt trở lạc",
  tenAnh: "Wind heat affecting the meridians pattern",
  moTa: "Đặc trưng bởi cảm giác tê cục bộ, đau rát, ngứa và đỏ. Chứng này thường xảy ra khi phong nhiệt làm suy yếu sự vận hành của khí trong kinh mạch.",
  tenTrung: ["风热阻络证", "风热中络证"],
  pinyin: "fēng rè zǔ luò zhèng"
},
{
  stt: 1354,
  tenViet: "Chứng hàn trệ kinh lạc",
  tenAnh: "Cold retention in the meridians pattern",
  moTa: "Đặc trưng bởi sợ lạnh, lạnh chân tay, đau nhức, co rút hoặc tê bì, sắc mặt tím sẫm hoặc nhợt nhạt, rêu lưỡi trắng, mạch huyền khẩn. Chứng này thường xảy ra khi hàn tích tụ ảnh hưởng đến sự lưu thông của huyết trong kinh mạch.",
  tenTrung: ["寒滞经络证"],
  pinyin: "hán zhì jīng luò zhèng"
},
{
  stt: 1355,
  tenViet: "Chứng thấp nhiệt trở lạc",
  tenAnh: "Damp heat obstructing the meridians pattern",
  moTa: "Đặc trưng bởi sốt, hơi khát, nặng nề chân tay, đau tê, loét và ngứa cục bộ, rêu lưỡi vàng, nhớt, mạch hoạt sác, thường xảy ra khi thấp nhiệt tổn thương đến kinh mạch.",
  tenTrung: ["湿热阻络证"],
  pinyin: "shī rè zǔ luò zhèng"
},
{
  stt: 1356,
  tenViet: "Chứng hàn thấp trở lạc",
  tenAnh: "Cold dampness obstructing the meridians pattern",
  moTa: "Đặc trưng bởi nặng nề tứ chi hoặc cục bộ, lạnh, đau, tê hoặc sưng tấy, sợ lạnh, chân tay lạnh, rêu lưỡi trắng trơn, thường xuất hiện khi hàn thấp tổn thương đến kinh mạch.",
  tenTrung: ["寒湿阻络证", "寒湿入络证"],
  pinyin: "hán shī zǔ luò zhèng"
},
{
  stt: 1357,
  tenViet: "Chứng đàm thấp trở lạc",
  tenAnh: "Phlegm-dampness obstructing the meridians pattern",
  moTa: "Đặc trưng bởi tê và sưng khớp hoặc chân tay, da sưng tấy, cứng, tê và ngứa, rêu lưỡi trắng nhớt, thường xảy ra khi đàm thấp trọc làm tắc nghẽn kinh mạch.",
  tenTrung: ["痰湿阻络证", "痰湿阻痹证"],
  pinyin: "tán shī zǔ luò zhèng"
},
{
  stt: 1358,
  tenViet: "Chứng ứ nhiệt nhập lạc",
  tenAnh: "Stasis and heat entering the meridians pattern",
  moTa: "Đặc trưng bởi sốt nhẹ, vùng bị ảnh hưởng tấy đỏ, đau rát, lưỡi đỏ đậm hoặc tím, mạch tế sáp sác, thường xảy ra khi nhiệt hỗ kết với huyết làm tắc nghẽn kinh mạch.",
  tenTrung: ["瘀热入络证"],
  pinyin: "yū rè rù luò zhèng"
},
{
  stt: 1359,
  tenViet: "Chứng ứ huyết trở lạc",
  tenAnh: "Stagnant blood obstructing the meridians pattern",
  moTa: "Đặc trưng bởi đau nhói, có vị trí cố định, ngoài ra có thể có đốm tím, cục hoặc chảy máu đen, lưỡi tím hoặc có điểm ứ huyết, mạch sáp, thường xảy ra khi huyết ứ tắc nghẽn kinh mạch.",
  tenTrung: ["瘀血阻络证"],
  pinyin: "yū xuè zǔ luò zhèng"
},
{
  stt: 1361,
  tenViet: "Chứng thủ thái âm Phế kinh",
  tenAnh: "Lung meridian pattern",
  moTa: "Đặc trưng bởi ho, thở hổn hển, khó thở, ho ra máu, căng tức ngực, sưng loét họng, đau ở xương đòn và dọc theo bờ trước của mặt trong cánh tay và đau lạnh ở vai và lưng. Chứng này thường là kết quả của sự suy giảm lưu thông khí ở Phế kinh.",
  tenTrung: ["手太阴肺经证"],
  pinyin: "shǒu tài yīn fèi jīng zhèng"
},
{
    stt: 1362,
    tenViet: "Chứng thủ dương minh Đại trường kinh",
    tenAnh: "Large intestine meridian pattern",
    moTa: "Đặc trưng bởi đau bụng, sôi ruột, tiêu chảy, táo bón, kiết lỵ, sưng loét họng, đau răng, chảy nước mũi trong, chảy máu cam và đau, cảm giác nóng hoặc lạnh dọc theo đường kinh. Chứng này thường do suy giảm lưu thông khí ở Đại trường kinh.",
    tenTrung: ["手阳明大肠经证"],
    pinyin: "shǒu yáng míng dà cháng jīng zhèng"
  },
  {
    stt: 1363,
    tenViet: "Chứng túc dương minh Vị kinh",
    tenAnh: "Stomach meridian pattern",
    moTa: "Đặc trưng bởi sôi bụng, chướng bụng, phù nề, đau dạ dày, nôn mửa, sau khi ăn đói nhanh, khát nước, sưng loét họng, chảy máu cam, đau ngực hoặc đầu gối, sốt và hưng cảm. Chứng này thường do suy giảm lưu thông khí ở Vị kinh.",
    tenTrung: ["足阳明胃经证"],
    pinyin: "zú yáng míng wèi jīng zhèng"
  },
  {
    stt: 1364,
    tenViet: "Chứng túc thái dương Tỳ kinh",
    tenAnh: "Spleen meridian pattern",
    moTa: "Đặc trưng bởi đau dạ dày, nôn ngay sau khi ăn, ợ hơi, chướng bụng, phân lỏng, vàng da, cơ thể nặng nề và yếu, đau hoặc cứng ở gốc lưỡi, sưng dọc theo mặt trong của chân và tứ chi lạnh. Chứng này thường do suy giảm lưu thông khí ở Tỳ kinh.",
    tenTrung: ["足太阴脾经证"],
    pinyin: "zú tài yīn pí jīng zhèng"
  },
  {
    stt: 1365,
    tenViet: "Chứng thủ thiếu âm Tâm kinh",
    tenAnh: "Heart meridian pattern",
    moTa: "Đặc trưng bởi đau tim, khô họng, khát nước, mắt vàng, đau vùng hạ sườn và dọc theo mặt trong của cánh tay, cảm giác nóng ở lòng bàn tay. Chứng này thường là do suy giảm lưu thông khí ở Tâm kinh.",
    tenTrung: ["手少阴心经证"],
    pinyin: "shǒu shào yīn xīn jīng zhèng"
  },
  {
    stt: 1366,
    tenViet: "Chứng thủ thái dương Tiểu trường kinh",
    tenAnh: "Small intestine meridian pattern",
    moTa: "Đặc trưng bởi đau bụng dưới, đau thắt lưng lan về phía tinh hoàn, điếc, mắt vàng, sưng má, sưng loét họng và đau dọc theo bờ sau mặt ngoài của vai và cánh tay. Chứng này thường là do suy giảm lưu thông khí ở Tiểu trường kinh.",
    tenTrung: ["手太阳小肠经证"],
    pinyin: "shǒu tài yáng xiǎo cháng jīng zhèng"
  },
  {
    stt: 1367,
    tenViet: "Chứng túc thái dương Bàng quang kinh",
    tenAnh: "Bladder meridian pattern",
    moTa: "Đặc trưng bởi bí tiểu, đái dầm, hưng cảm, hàn nhiệt vãng lai, đau mắt, chảy nước mắt khi tiếp xúc với gió, nghẹt mũi do chảy nước mũi, chảy máu cam, đau đầu và đau dọc theo cổ, lưng, thắt lưng, mông và mặt sau của chân. Chứng này thường là do suy giảm lưu thông khí ở Bàng quang kinh.",
    tenTrung: ["足太阳膀胱经证"],
    pinyin: "zú tài yáng páng guāng jīng zhèng"
  },
{
    stt: 1368,
    tenViet: "Chứng túc thiếu âm Thận kinh",
    tenAnh: "Kidney meridian pattern",
    moTa: "Đặc trưng bởi ho ra máu, thở hổn hển, lưỡi khô, sưng loét họng, phù nề, táo bón, tiêu chảy, đau thắt lưng, đau dọc theo cột sống và đùi, cơ mềm và có cảm giác nóng ở lòng bàn chân. Chứng này thường là do suy giảm lưu thông khí ở Thận kinh.",
    tenTrung: ["足少阴肾经证"],
    pinyin: "zú shào yīn shèn jīng zhèng"
  },
  {
    stt: 1369,
    tenViet: "Chứng thủ thiếu dương Tam tiêu kinh",
    tenAnh: "Triple energizer meridian pattern",
    moTa: "Đặc trưng bởi chướng bụng, phù nề, đái dầm, bí tiểu, điếc, ù tai, đau họng, mắt đỏ sưng và đau, má sưng, đau sau tai và dọc theo mặt bên của vai, cánh tay và khuỷu tay. Chứng này thường là do suy giảm lưu thông khí ở Tam tiêu kinh.",
    tenTrung: ["手少阳三焦经证"],
    pinyin: "shǒu shào yáng sān jiāo jīng zhèng"
  },
  {
    stt: 1370,
    tenViet: "Chứng thủ quyết âm Tâm bào kinh",
    tenAnh: "Pericardium meridian pattern",
    moTa: "Đặc trưng bởi đau tim, tức ngực, bồn chồn, hưng cảm, sưng nách, co rút cánh tay và cảm giác nóng ở lòng bàn tay. Chứng này thường là do suy giảm lưu thông khí ở Tâm bào kinh.",
    tenTrung: ["手厥阴心包经证"],
    pinyin: "shǒu jué yīn xīn bāo jīng zhèng"
  },
  {
    stt: 1371,
    tenViet: "Chứng túc thiếu dương Đởm kinh",
    tenAnh: "Gallbladder meridian pattern",
    moTa: "Đặc trưng bởi miệng đắng, mắt mờ, hàn nhiệt vãng lai, đau đầu, đau ở cằm, khóe mắt và xương đòn, sưng nách, đau dọc ngực, vùng hạ sườn, đùi và mặt bên của chân và bàn chân, và cảm giác nóng dọc theo mặt bên của bàn chân. Chứng này thường là do suy giảm lưu thông khí ở Đởm kinh.",
    tenTrung: ["足少阳胆经证"],
    pinyin: "zú shào yáng dǎn jīng zhèng"
  },
{
  stt: 1372,
  tenViet: "Chứng túc quyết âm Can kinh",
  tenAnh: "Liver meridian pattern",
  moTa: "Đặc trưng bởi đau thắt lưng, tức ngực, nấc cụt, đái dầm, bí tiểu, thoát vị và sưng bụng dưới. Chứng này thường là do suy giảm lưu thông khí ở Can kinh.",
  tenTrung: ["足厥阴肝经证"],
  pinyin: "zú jué yīn gān jīng zhèng"
},
{
    stt: 1374,
    tenViet: "Chứng Đốc mạch",
    tenAnh: "Du meridian pattern / Governor vessel pattern",
    moTa: "Đặc trưng bởi đau/cứng cột sống và thế người ưỡn cong. Chứng này thường là do suy giảm lưu thông khí ở mạch Đốc.",
    tenTrung: ["督脉证"],
    pinyin: "dū mài zhèng"
  },
  {
    stt: 1375,
    tenViet: "Chứng Nhâm mạch",
    tenAnh: "Ren meridian pattern / Conception vessel pattern",
    moTa: "Đặc trưng bởi thoát vị, tiết dịch âm đạo và khối u ở bụng. Chứng này thường là do suy giảm lưu thông khí ở mạch Nhâm.",
    tenTrung: ["任脉证"],
    pinyin: "rèn mài zhèng"
  },
  {
    stt: 1376,
    tenViet: "Chứng Xung mạch",
    tenAnh: "Chong meridian pattern / Thoroughfare vessel pattern",
    moTa: "Đặc trưng bởi sự co rút của bụng do khí nghịch. Chứng này thường là do suy giảm lưu thông khí ở mạch Xung.",
    tenTrung: ["冲脉证"],
    pinyin: "chōng mài zhèng"
  },
  {
    stt: 1377,
    tenViet: "Chứng Âm duy mạch",
    tenAnh: "Yinwei meridian pattern / Yin link vessel pattern",
    moTa: "Đặc trưng bởi đau tim và u sầu. Chứng này thường là do suy giảm lưu thông khí ở mạch Âm duy.",
    tenTrung: ["阴维脉证"],
    pinyin: "yīn wéi mài zhèng"
  },
  {
    stt: 1378,
    tenViet: "Chứng Dương duy mạch",
    tenAnh: "Yangwei meridian pattern / Yang link vessel pattern",
    moTa: "Đặc trưng bởi sợ lạnh, sốt và đau thắt lưng. Chứng này thường là do suy giảm lưu thông khí ở mạch Dương duy.",
    tenTrung: ["阳维脉证"],
    pinyin: "yáng wéi mài zhèng"
  },
  {
    stt: 1379,
    tenViet: "Chứng Đới mạch",
    tenAnh: "Dai meridian pattern / Belt vessel pattern",
    moTa: "Đặc trưng bởi cảm giác đầy bụng và cảm giác lạnh ở thắt lưng (như ngồi trong nước). Chứng này thường là do suy giảm lưu thông khí ở mạch Đới.",
    tenTrung: ["带脉证"],
    pinyin: "dài mài zhèng"
  },
{
    stt: 1380,
    tenViet: "Chứng Dương kiểu mạch",
    tenAnh: "Yangqiao meridian pattern / Yang heel vessel pattern",
    moTa: "Đặc trưng bởi đau mắt (góc mắt trong) và mất ngủ. Chứng này thường là do suy giảm lưu thông khí ở mạch Dương kiểu.",
    tenTrung: ["阳蹻脉证"],
    pinyin: "yáng qiāo mài zhèng"
  },
  {
    stt: 1381,
    tenViet: "Chứng Âm kiểu mạch",
    tenAnh: "Yinqiao meridian pattern / Yin heel vessel pattern",
    moTa: "Đặc trưng bởi chứng ngủ lịm và bí tiểu. Chứng này thường là do suy giảm lưu thông khí ở mạch Âm kiểu.",
    tenTrung: ["阴蹻脉证"],
    pinyin: "yīn qiāo mài zhèng"
  },
{
  stt: 1383,
  tenViet: "Chứng thấp nhiệt di man Tam tiêu",
  tenAnh: "Damp heat affecting the three jiao pattern / Damp heat affecting triple energizer pattern",
  moTa: "Đặc trưng bởi sốt không khỏi sau khi đổ mồ hôi, nặng nề cơ thể, khó chịu ở dạ dày và có khối, không khát hoặc khát mà uống ít, nước tiểu ít, vàng và cảm giác đại tiện không hết sau khi đi tiêu. Lưỡi đỏ, rêu vàng nhớt. Mạch hoạt sác. Chứng này thường xảy ra khi thấp nhiệt trộn lẫn.",
  tenTrung: ["湿热弥漫三焦证"],
  pinyin: "shī rè mí màn sān jiāo zhèng"
},
{
  stt: 1384,
  tenViet: "Chứng thượng tiêu thấp nhiệt",
  tenAnh: "Damp heat in the upper jiao pattern / Dampness and heat in the upper energizer pattern",
  moTa: "Đặc trưng bởi sốt, sợ lạnh, nặng nề cơ thể, ho, tức ngực, không ra mồ hôi, rêu lưỡi vàng trắng, mạch nhu hoãn. Chứng này thường xảy ra khi thấp nhiệt ảnh hưởng đến thượng tiêu.",
  tenTrung: ["上焦湿热证"],
  pinyin: "shàng jiāo shī rè zhèng"
},
{
    stt: 1385,
    tenViet: "Chứng thượng tiêu táo nhiệt",
    tenAnh: "Dry heat in the upper jiao pattern / Upper energizer dryness and heat pattern / Upper energizer dryness heat pattern",
    moTa: "Đặc trưng bởi sốt, sợ gió lạnh, khát nước, ho khan, đau đầu, ra ít mồ hôi, môi khô, khô đau họng, ù tai, mắt đỏ, sưng nướu, da khô, rêu lưỡi trắng, mạch sác đại. Chứng này thường xảy ra khi táo nhiệt ảnh hưởng đến chức năng tuyên phát và túc giáng của Phế khí.",
    tenTrung: ["上焦燥热证"],
    pinyin: "shàng jiāo zào rè zhèng"
  },
  {
    stt: 1386,
    tenViet: "Chứng trung tiêu thấp nhiệt",
    tenAnh: "Damp heat in the middle jiao pattern / Dampness and heat in the middle energizer pattern / Middle energizer dampness and heat pattern",
    moTa: "Đặc trưng bởi sốt không khỏi sau khi đổ mồ hôi và trở nên rõ hơn về chiều, có khối trong bụng và chướng bụng, buồn nôn, nôn, chán ăn, khát mà ít uống, nước tiểu vàng và phân lỏng. Chứng này thường xảy ra khi thấp nhiệt tổn thương Tỳ Vị.",
    tenTrung: ["中焦湿热证"],
    pinyin: "zhōng jiāo shī rè zhèng"
  },
  {
    stt: 1387,
    tenViet: "Chứng trung tiêu tích nhiệt / Chứng trung tiêu thực nhiệt",
    tenAnh: "Heat accumulating in the middle jiao pattern / Excess heat in the middle jiao",
    moTa: "Đặc trưng bởi sốt, khát nước, chướng bụng, đau bụng, táo bón, nước tiểu ít, vàng, lưỡi đỏ, rêu vàng khô, mạch sác hữu lực, thường xảy ra khi nhiệt tà tích tụ ở trung tiêu.",
    tenTrung: ["中焦积热证", "中焦实热证"],
    pinyin: "zhōng jiāo jī rè zhèng"
  },
  {
    stt: 1388,
    tenViet: "Chứng hạ tiêu thấp nhiệt",
    tenAnh: "Damp heat in the lower jiao pattern / Dampness and heat in the lower energizer pattern",
    moTa: "Đặc điểm là nước tiểu chảy nhỏ giọt, đi tiểu đau, phân lỏng có mùi nồng, bụng dưới chướng và đau, bí tiểu, táo bón, dịch âm đạo vàng, trắng, có mùi hôi, sốt, khát nước, lưỡi đỏ, rêu vàng nhớt, mạch hoạt sác. Chứng này thường xảy ra khi thấp nhiệt tổn thương Đại trường hoặc Bàng quang.",
    tenTrung: ["下焦湿热证"],
    pinyin: "xià jiāo shī rè zhèng"
  },
{
  stt: 1389,
  tenViet: "Chứng ứ trở hạ tiêu",
  tenAnh: "Stasis obstructing the lower jiao pattern / Stasis obstructing the lower energizer pattern",
  moTa: "Đặc trưng bởi đau nhói hoặc căng tức ở vùng bụng dưới, cự án. Ngoài ra, có thể sờ thấy khối và nước tiểu/phân có máu. Lưỡi tím sẫm hoặc có vết ứ huyết. Mạch huyền sáp. Chứng này thường xảy ra khi huyết ứ tổn thương Đại trường, Bàng quang và Bào cung.",
  tenTrung: ["瘀阻下焦证"],
  pinyin: "yū zǔ xià jiāo zhèng"
},
{
    stt: 1391,
    tenViet: "Chứng ứ trệ cơ phu",
    tenAnh: "Stasis affecting the skin pattern",
    moTa: "Đặc trưng bởi da khô, sần sùi, đóng vảy hoặc tê, có vết xước đau chảy máu hoặc trên da có vết bầm máu màu tím sẫm, mạch phù tế sáp. Chứng này thường xảy ra khi huyết ứ ảnh hưởng đến bì phu.",
    tenTrung: ["瘀滞肌肤证"],
    pinyin: "yū zhì jī fū zhèng"
  },
  {
    stt: 1392,
    tenViet: "Chứng nhiệt tà trở tý",
    tenAnh: "Heat affecting the bones/joints pattern",
    moTa: "Đặc trưng bởi các khớp sưng đỏ, nóng và đau. Chứng này thường xảy ra khi phong thấp nhiệt, đặc biệt là nhiệt ảnh hưởng đến cân, cốt và quan tiết.",
    tenTrung: ["热邪阻痹证"],
    pinyin: "rè xié zǔ bì zhèng"
  },
  {
    stt: 1393,
    tenViet: "Chứng thấp nhiệt trở tý",
    tenAnh: "Damp heat affecting the bones/joints pattern",
    moTa: "Đặc trưng bởi sốt, khớp sưng, nặng, nóng, đau, lưỡi đỏ rêu vàng nhớt, mạch hoạt sác, thường xảy ra khi thấp nhiệt tích tụ ở cân, cốt và quan tiết.",
    tenTrung: ["湿热阻痹证"],
    pinyin: "shī rè zǔ bì zhèng"
  },
  {
    stt: 1394,
    tenViet: "Chứng hàn thấp trước yêu",
    tenAnh: "Cold dampness affecting the low back pattern",
    moTa: "Đặc trưng bởi cảm giác đau lạnh vùng thắt lưng, nặng hơn khi lạnh. Chứng này thường xảy ra khi hàn thấp ảnh hưởng đến vùng thắt lưng.",
    tenTrung: ["寒湿着腰证"],
    pinyin: "hán shī zhuó yāo zhèng"
  },
{
    stt: 1397,
    tenViet: "Thái dương bệnh chứng",
    tenAnh: "Taiyang pattern\nEarly yang stage pattern\nGreater yang pattern",
    moTa: "Đặc trưng bởi sự biểu hiện của Thái dương kinh chứng và Thái dương phủ chứng. Chứng này thường xảy ra khi sự đấu tranh giữa chính khí và tà khí ảnh hưởng đến hoạt động bình thường của phần Vệ và Dinh.",
    tenTrung: ["太阳病证"],
    pinyin: "tài yáng bìng zhèng"
  },
  {
    stt: 1398,
    tenViet: "Thái dương kinh chứng",
    tenAnh: "Taiyang meridian pattern",
    moTa: "Đặc trưng bởi sốt, sợ gió/lạnh, đau đầu, đau thắt lưng, nghẹt mũi, chảy nước mũi trong, đổ mồ hôi, mạch phù hoãn hoặc phù khẩn. Chứng này thường xảy ra khi phong hàn tà xâm phạm kinh Thái Dương và quấy nhiễu hoạt động bình thường của phần Dinh và Vệ.",
    tenTrung: ["太阳经证"],
    pinyin: "tài yáng jīng zhèng"
  },
  {
    stt: 1399,
    tenViet: "Chứng Thái dương trúng phong",
    tenAnh: "Taiyang wind attack pattern",
    moTa: "Đặc trưng bởi sốt, sợ lạnh/gió, đổ mồ hôi, mạch phù hoãn. Ngoài ra, có thể có đau đầu, cứng cổ gáy, đau nhức cơ thể, đau thắt lưng, nghẹt mũi, chảy nước trong, rêu lưỡi trắng mỏng. Chứng này thường xảy ra khi phong hàn tà xâm phạm kinh Thái Dương và làm xáo trộn sự hài hòa giữa phần Dinh và Vệ.",
    tenTrung: ["太阳中风证"],
    pinyin: "tài yáng zhòng fēng zhèng"
  },
  {
    stt: 1400,
    tenViet: "Chứng Thái dương thương hàn",
    tenAnh: "Taiyang cold attack pattern",
    moTa: "Đặc trưng bởi sợ lạnh, sốt, đau đầu, đau cứng cổ gáy, không ra mồ hôi, thở hổn hển, mạch phù khẩn. Chứng này thường xảy ra khi phong hàn tà bên ngoài làm tắc nghẽn phần Vệ dương và bít tắc tấu lý ở bì phu.",
    tenTrung: ["太阳伤寒证"],
    pinyin: "tài yáng shāng hán zhèng"
  },
  {
    stt: 1401,
    tenViet: "Thái dương phủ chứng",
    tenAnh: "Taiyang–fu organ pattern",
    moTa: "Đặc trưng bởi khát nước, bồn chồn, mất ngủ, hưng cảm, bụng dưới cứng/đầy, ức chế đi tiểu và nôn ngay sau khi uống, mạch trầm sáp hoặc trầm kết. Chứng này thường xảy ra khi nhiệt tà nhập phủ và ảnh hưởng chức năng khí hóa của Bàng quang. Nó cũng có thể xảy ra khi nhiệt tà và huyết ứ ảnh hưởng đến vùng bụng dưới.",
    tenTrung: ["太阳腑证"],
    pinyin: "tài yáng fǔ zhèng"
  },
{
    stt: 1402,
    tenViet: "Dương minh bệnh chứng",
    tenAnh: "Yangming disorders\nMiddle yang stage pattern\nYang brightness pattern",
    moTa: "Một nhóm rối loạn gây ra bởi dương nhiệt thịnh trong kinh dương minh hoặc dương minh phủ.",
    tenTrung: ["阳明病证"],
    pinyin: "yáng míng bìng zhèng"
  },
  {
    stt: 1403,
    tenViet: "Dương minh kinh chứng",
    tenAnh: "Yangming meridian pattern",
    moTa: "Đặc trưng bởi sốt cao, sợ nóng thay vì sợ lạnh, đổ mồ hôi nhiều, khát nước quá mức và rất muốn uống nước. Ngoài ra, có thể có bồn chồn, thở hổn hển, mặt đỏ bừng, rêu lưỡi vàng khô. Mạch hồng đại. Chứng này thường xảy ra khi nhiệt thịnh tổn thương đến kinh Dương Minh và toàn bộ cơ thể.",
    tenTrung: ["阳明经证"],
    pinyin: "yáng míng jīng zhèng"
  },
  {
    stt: 1404,
    tenViet: "Dương minh phủ thực chứng",
    tenAnh: "Excess Yangming–fu organ pattern\nYangming–fu organ pattern",
    moTa: "Đặc trưng bởi sốt nặng hơn về chiều, đổ mồ hôi tay/chân, đầy bụng, đau chướng bụng và cự án, táo bón. Trong trường hợp nặng, có thể xuất hiện tình trạng mất ý thức, mê sảng, bồn chồn và mất ngủ. Rêu lưỡi vàng dày khô hoặc đen như than, có gai. Mạch trầm hữu lực hoặc hoạt sác. Chứng này thường xảy ra khi nhiệt tà xâm nhập vào Đại trường và lẫn với phân khô.",
    tenTrung: ["阳明腑实证", "阳明腑证"],
    pinyin: "yáng míng fǔ shí zhèng"
  },
  {
    stt: 1405,
    tenViet: "Thiếu dương bệnh chứng",
    tenAnh: "Shaoyang pattern\nLate yang stage pattern\nLesser yang pattern",
    moTa: "Đặc trưng bởi miệng đắng, họng khô, chóng mặt, mắt mờ, hàn nhiệt vãng lai, đầy ngực và hạ sườn, không muốn ăn uống, bồn chồn, nôn mửa. Mạch huyền. Chứng này thường xảy ra khi tà khí ảnh hưởng đến sự vận hành của khí ở kinh Thiếu Dương.",
    tenTrung: ["少阳病证"],
    pinyin: "shào yáng bìng zhèng"
  },
  {
    stt: 1406,
    tenViet: "Thái âm bệnh chứng",
    tenAnh: "Taiyin pattern\nEarly yin stage pattern\nGreater yin pattern",
    moTa: "Đặc trưng bởi đầy bụng, nôn mửa, chán ăn, tiêu chảy, không khát và thỉnh thoảng đau bụng. Mạch trầm hoãn hoặc nhược. Chứng này thường là do cảm nhiễm phong hàn tà và tích tụ hàn thấp do Tỳ dương hư.",
    tenTrung: ["太阴病证"],
    pinyin: "tài yīn bìng zhèng"
  },
{
    stt: 1407,
    tenViet: "Thiếu âm bệnh chứng",
    tenAnh: "Shaoyin pattern\nLesser yin pattern\nMiddle yin stage pattern",
    moTa: "Đặc trưng bởi các biểu hiện của chứng Thiếu Âm hàn hóa và chứng Thiếu Âm nhiệt hóa. Chứng này thường là kết quả của sự suy giảm chức năng của Tâm Thận cũng như sự thiếu hụt âm dương nói chung.",
    tenTrung: ["少阴病证"],
    pinyin: "shào yīn bìng zhèng"
  },
  {
    stt: 1408,
    tenViet: "Chứng thiếu âm hàn hóa",
    tenAnh: "Shaoyin cold transformation pattern",
    moTa: "Đặc trưng bởi sợ lạnh mà không sốt, tiêu chảy với thức ăn không tiêu trong phân và chân tay lạnh. Mạch hư tế. Chứng này thường xảy ra khi tà khí xâm nhập vào kinh Thiếu Âm và hóa hàn, kết hợp với Tâm Thận dương khí suy hư.",
    tenTrung: ["少阴寒化证"],
    pinyin: "shào yīn hán huà zhèng"
  },
  {
    stt: 1409,
    tenViet: "Chứng thiếu âm nhiệt hóa",
    tenAnh: "Shaoyin heat transformation pattern",
    moTa: "Đặc trưng bởi bồn chồn, mất ngủ và khô miệng/cổ họng. Mạch tế sác. Chứng này thường xảy ra khi tà khí xâm nhập vào kinh Thiếu âm và hóa thành nhiệt, kết hợp với dương thịnh do âm hư.",
    tenTrung: ["少阴热化证"],
    pinyin: "shào yīn rè huà zhèng"
  },
  {
    stt: 1410,
    tenViet: "Quyết âm bệnh chứng",
    tenAnh: "Jueyin pattern\nLate Yin stage Pattern\nReverting yin pattern",
    moTa: "Đặc trưng bởi tình trạng suy nhược, khát nước, khí nghịch lên Tâm, cảm giác đau và sốt trong tim, đói nhưng không muốn ăn và nôn giun đũa sau khi ăn. Chứng này thường xảy ra ở giai đoạn gần cuối của lục kinh truyền biến và biểu hiện dưới dạng cực nhiệt hoặc cực hàn, hoặc hàn nhiệt lẫn lộn.",
    tenTrung: ["厥阴病证"],
    pinyin: "jué yīn bìng zhèng"
  },
{
    stt: 1412,
    tenViet: "Chứng Vệ phận",
    tenAnh: "Wei-defence phase pattern\nDefence phase pattern\nWei aspect pattern",
    moTa: "Đặc trưng bởi sốt và hơi sợ gió lạnh. Mạch phù sác. Chứng này thường xảy ra khi ôn nhiệt tà ảnh hưởng đến chức năng bình thường của Vệ khí và làm rối loạn sự tuyên phát và túc giáng của Phế khí.",
    tenTrung: ["卫分证"],
    pinyin: "wèi fèn zhèng"
  },
  {
    stt: 1413,
    tenViet: "Chứng thấp át Vệ dương",
    tenAnh: "Dampness blocking Wei-defensive yang pattern\nDampness obstructing the defence yang pattern",
    moTa: "Đặc trưng bởi sốt, sợ lạnh, đổ mồ hôi ít, đau đầu, mệt mỏi, tức ngực, chán ăn và không khát. Rêu lưỡi trắng mỏng hoặc nhớt. Mạch hoãn. Chứng này thường xảy ra khi thấp tà làm tắc nghẽn sự vận hành của Vệ khí.",
    tenTrung: ["湿遏卫阳证"],
    pinyin: "shī è wèi yáng zhèng"
  },
  {
    stt: 1414,
    tenViet: "Chứng Thấp tà xâm tập Phế vệ",
    tenAnh: "Toxin attacking the lung defence\nHeat attacking the lung defence pattern\nWarm attacking the lung defence pattern\nPathogenic warmth affecting the Wei-defence",
    moTa: "Đặc trưng bởi sốt, đau đầu, hơi sợ gió lạnh, ra mồ hôi ít/không ra mồ hôi, ho, hơi khát nước và đau họng. Rêu lưỡi mỏng màu trắng hoặc vàng. Mạch phù sác. Chứng này thường xảy ra khi ôn nhiệt tà tấn công phần Vệ và ảnh hưởng đến sự tuyên phát của Phế khí.",
    tenTrung: ["温邪侵袭肺卫证", "毒侵肺卫证"],
    pinyin: "wēn xié qīn xí fèi wèi zhèng"
  },
  {
    stt: 1415,
    tenViet: "Chứng khí phận / Chứng khí phận nhiệt thịnh",
    tenAnh: "Qi phase pattern",
    moTa: "Đặc trưng bởi sốt mà không sợ lạnh. Rêu lưỡi vàng. Chứng này thường xảy ra khi ôn tà hóa nhiệt.",
    tenTrung: ["气分证", "气分热盛证"],
    pinyin: "qì fèn zhèng"
  },
  {
    stt: 1416,
    tenViet: "Chứng nhiệt nhập khí phận",
    tenAnh: "Heat entering the qi phase\nHeat entering the qi phase pattern",
    moTa: "Đặc trưng bởi sốt, khát nước, nước tiểu vàng đậm và táo bón. Lưỡi đỏ rêu vàng. Mạch hoạt sác. Chứng này thường xảy ra khi hỏa/nhiệt độc đấu tranh với chính khí trong phần khí.",
    tenTrung: ["热入气分证"],
    pinyin: "rè rù qì fèn zhèng"
  },
{
    stt: 1417,
    tenViet: "Chứng khí phận thấp nhiệt",
    tenAnh: "Damp heat in the qi phase\nQi phase dampness and heat pattern",
    moTa: "Đặc trưng bởi sốt không thuyên giảm sau khi đổ mồ hôi, tức ngực, chướng bụng, da và mắt hơi vàng, chân tay yếu, buồn nôn, nôn và nước tiểu vàng. Lưỡi đỏ, rêu vàng nhớt. Mạch nhu sác hoặc hoạt sác. Chứng này thường xảy ra khi thấp nhiệt ảnh hưởng đến phần khí.",
    tenTrung: ["气分湿热证"],
    pinyin: "qì fèn shī rè zhèng"
  },
  {
    stt: 1418,
    tenViet: "Chứng thấp trở khí phận",
    tenAnh: "Dampness obstructing the qi phase\nDampness obstructing the qi phase pattern",
    moTa: "Đặc trưng bởi sốt không thuyên giảm sau khi đổ mồ hôi, khát nhưng không muốn uống, khó chịu ở ngực hoặc dạ dày, buồn nôn, nôn và cảm giác đại tiện không hết. Các triệu chứng đi kèm có thể bao gồm tiêu chảy, cơ thể nặng nề và mệt mỏi. Lưỡi đỏ, rêu hơi vàng, trơn nhớt. Mạch nhu sác. Chứng này thường xảy ra khi thấp ảnh hưởng đến phần khí.",
    tenTrung: ["湿阻气分证"],
    pinyin: "shī zǔ qì fèn zhèng"
  },
  {
    stt: 1419,
    tenViet: "Chứng Dinh phận",
    tenAnh: "Ying nutrients phase pattern\nNutrient phase patterns\nYing aspect patterns\nExuberant heat in the Ying nutrients phase",
    moTa: "Đặc trưng bởi sốt nặng hơn vào ban đêm, bồn chồn và mất ngủ. Lưỡi đỏ đậm. Mạch tế sác. Chứng này thường xảy ra khi nhiệt tà tiêu hao phần Dinh và làm rối loạn tâm trí.",
    tenTrung: ["营分证", "营分热盛证"],
    pinyin: "yíng fèn zhèng"
  },
  {
    stt: 1420,
    tenViet: "Chứng Dinh Vệ bất hòa",
    tenAnh: "Disharmony between the Ying nutrients and Wei-defence pattern\nNutrient qi and defence qi disharmony pattern",
    moTa: "Đặc trưng bởi tự hãn mà không sốt. Ngoài ra, bệnh nhân có thể bị sốt và tự hãn hoặc không. Chứng này thường xảy ra khi dương khí hư hoặc khi dương khí ứ đọng trên bề mặt cơ thể ảnh hưởng đến phần Dinh và tân dịch.",
    tenTrung: ["营卫不和证"],
    pinyin: "yíng wèi bù hé zhèng"
  },
{
    stt: 1421,
    tenViet: "Chứng nhiệt nhập Dinh phận",
    tenAnh: "Heat entering the Ying nutrients phase pattern\nHeat in the nutrient phase pattern",
    moTa: "Đặc trưng bởi sốt nặng về đêm, bồn chồn, mất ngủ, mất ý thức, mê sảng, nổi ban. Lưỡi đỏ đậm. Chứng này thường xảy ra khi hỏa/nhiệt độc xâm nhập vào phần Dinh và làm rối loạn tâm trí.",
    tenTrung: ["热入营分证"],
    pinyin: "rè rù yíng fèn zhèng"
  },
  {
    stt: 1422,
    tenViet: "Chứng nhiệt nhập Dinh huyết",
    tenAnh: "Heat entering the Ying nutrients and blood phases pattern\nHeat entering the nutrient and blood phase pattern",
    moTa: "Đặc trưng bởi sốt nặng hơn vào ban đêm, bồn chồn và mất ngủ. Ngoài ra, có thể xuất hiện tình trạng mất ý thức, khát mà uống ít, nổi ban, chảy máu, táo bón và nước tiểu vàng. Lưỡi đỏ đậm. Mạch tế sác. Chứng này thường xảy ra khi ôn/nhiệt tà tiêu hao âm huyết và làm rối loạn tâm trí.",
    tenTrung: ["热入营血证"],
    pinyin: "rè rù yíng xuè zhèng"
  },
  {
    stt: 1423,
    tenViet: "Chứng nhiệt độc nhập Dinh / Chứng tà độc sí thịnh",
    tenAnh: "Heat toxin entering the Ying nutrients phase pattern\nExuberance of toxic fire/heat pattern",
    moTa: "Đặc trưng bởi sốt nặng về đêm, nổi ban, mất ý thức, mê sảng, khô miệng, khát nước và táo bón. Lưỡi đỏ đậm. Mạch tế sác. Chứng này thường xảy ra khi hỏa/nhiệt độc xâm nhập vào phần Dinh và huyết.",
    tenTrung: ["热毒入营证", "邪毒炽盛证"],
    pinyin: "rè dú rù yíng zhèng"
  },
  {
    stt: 1424,
    tenViet: "Chứng huyết phận",
    tenAnh: "Blood phase pattern",
    moTa: "Đặc trưng bởi sốt về đêm, bồn chồn, mất ngủ, mất ý thức, mê sảng, lưỡi tím sẫm, mạch huyền sác. Ngoài ra, có thể xuất hiện các vết ban tím sẫm, nôn ra máu, chảy máu cam, phân có máu, nước tiểu có máu, lưỡi khô, rêu ít và mạch tế hư. Chứng này thường xảy ra khi nhiệt thịnh làm động huyết, khuấy động phong và thương âm.",
    tenTrung: ["血分证"],
    pinyin: "xuè fèn zhèng"
  },
  {
    stt: 1425,
    tenViet: "Chứng nhiệt nhập huyết phận",
    tenAnh: "Heat entering the blood phase pattern\nExcess heat in the blood aspect pattern\nBlood and heat pattern",
    moTa: "Đặc trưng bởi các triệu chứng xuất huyết như ho ra máu, chảy máu cam, tiểu ra máu và phân có máu. Ngoài ra, có thể bị sốt cao, mất ý thức và co giật tay/chân. Lưỡi tím đậm. Chứng này thường xảy ra khi hỏa/nhiệt tiêu hao phần Dinh và huyết.",
    tenTrung: ["热入血分证"],
    pinyin: "rè rù xuè fèn zhèng"
  },
{
    stt: 1426,
    tenViet: "Chứng Vệ khí đồng bệnh",
    tenAnh: "Pattern involving both Wei-defence and qi phases",
    moTa: "Đặc trưng bởi sốt cao, đau đầu và hơi sợ gió lạnh. Ngoài ra, có thể có cơ thể đau nhức/nặng nề, nghẹt mũi, ho, khát nước, bồn chồn, đổ mồ hôi, nước tiểu vàng sẫm, đau họng và đắng miệng. Lưỡi đỏ, rêu vàng. Mạch phù sác. Chứng này thường xảy ra khi tà khí trong giai đoạn sốt xâm nhập vào phần khí và hóa nhiệt, trong khi tà khí ở phần Vệ vẫn chưa được giải quyết.",
    tenTrung: ["卫气同病证"],
    pinyin: "wèi qì tóng bìng zhèng"
  },
  {
    stt: 1427,
    tenViet: "Chứng khí Dinh lưỡng phiền",
    tenAnh: "Heat blazing in both qi and Ying phases pattern",
    moTa: "Đặc trưng bởi sốt cao, khát nước, bồn chồn và đau đầu. Ngoài ra, có thể xuất hiện tình trạng mất ý thức, phát ban dát, táo bón và nước tiểu vàng. Lưỡi đỏ đậm, rêu vàng. Mạch sác. Chứng này thường xảy ra khi chứng của khí phận cùng tồn tại với chứng của Dinh phận trong tình trạng sốt.",
    tenTrung: ["气营两燔证"],
    pinyin: "qì yíng liǎng fán zhèng"
  },
  {
    stt: 1428,
    tenViet: "Chứng khí huyết lưỡng phiền",
    tenAnh: "Heat blazing in both qi and blood phases pattern",
    moTa: "Đặc trưng bởi sốt cao, khát nước, đau đầu, bồn chồn, ban dát, nôn ra máu, chảy máu cam và phân có máu. Lưỡi đỏ đậm, rêu vàng. Mạch sác. Chứng này thường xảy ra khi nhiệt ở khí phận vẫn chưa được giải quyết, trong khi nhiệt độc tồn tại trong Dinh và huyết phận.",
    tenTrung: ["气血两燔证"],
    pinyin: "qì xuè liǎng fán zhèng"
  },
  {
    stt: 1429,
    tenViet: "Chứng nhiệt thịnh động phong",
    tenAnh: "Exuberant heat stirring wind pattern",
    moTa: "Đặc trưng bởi sốt cao, khát nước, mất ý thức, co giật tay/chân, cứng cổ gáy, tư thế ưỡn cao và cứng khít hàm. Lưỡi đỏ đậm, rêu vàng. Mạch huyền sác. Chứng này thường xảy ra khi nhiệt tà khuấy động Can phong.",
    tenTrung: ["热盛动风证"],
    pinyin: "rè shèng dòng fēng zhèng"
  },
{
  stt: 1430,
  tenViet: "Chứng nhiệt thịnh động huyết",
  tenAnh: "Exuberant heat moving blood pattern",
  moTa: "Đặc trưng bởi sốt cao, khát nước, mặt và mắt đỏ bừng. Ngoài ra, có thể có nước tiểu có máu, phân có máu, chảy máu cam hoặc vết ban. Lưỡi đỏ đậm, rêu vàng. Mạch hồng sác. Chứng này thường xảy ra khi nhiệt tà khiến huyết chảy ồ ạt.",
  tenTrung: ["热盛动血证"],
  pinyin: "rè shèng dòng xuè zhèng"
},
{
  stt: 1432,
  tenViet: "Chứng bế",
  tenAnh: "Blockage pattern",
  moTa: "Đặc trưng bởi cứng khít hàm, tay nắm chặt, mất ý thức, sốt hoặc lạnh chân tay. Chứng này thường là kết quả của trúng phong hoặc nhiệt xâm nhập vào Dinh và huyết phận.",
  tenTrung: ["闭证"],
  pinyin: "bì zhèng"
},
{
  stt: 1433,
  tenViet: "Chứng thoát",
  tenAnh: "Collapse pattern",
  moTa: "Đặc trưng bởi ngất xỉu hoặc mất ý thức đột ngột, chân tay mềm nhũn, bàn tay xòe ra, chân tay lạnh và đổ mồ hôi nhiều. Trong trường hợp nặng, cơ thể đổ mồ hôi kèm theo cảm giác lạnh, đại tiểu tiện không tự chủ, và lưỡi mềm có thể xuất hiện. Lưỡi tím sẫm, rêu trắng, nhớt. Mạch trầm hoãn hoặc trầm vi. Chứng này thường là kết quả của sự cạn kiệt nguyên khí và rối loạn nhận thức.",
  tenTrung: ["脱证"],
  pinyin: "tuō zhèng"
}
];
