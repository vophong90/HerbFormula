window.lang_zh = {
  // 通用标题
  app_title: "🧾 中医处方辅助应用",

  // 步骤导航栏
  step_tab: [
    "B0: 病历",
    "B1: 临床",
    "B2: 评估",
    "B3: 辩证",
    "B4: 处方建议",
    "B5: 校正"
  ],

  // ==== 步骤0：病历 ====
  step0: {
    title: "📁 第0步：病人病历管理",
    datetime: "📅 就诊时间：",
    choose_file: "📂 从JSON文件选择病历：",
    open_file: "📥 打开病历",
    new_record: "🆕 新建病历：",
    enter_name_placeholder: "请输入病人姓名……",
    create_record: "➕ 新建病历",
    continue: "➡ 继续到第1步"
  },

  // ==== 步骤1：临床信息 ====
  step1: {
    title: "📋 第1步：录入临床信息",
    name: "👤 姓名：",
    birth: "🎂 出生年份：",
    gender: "🚻 性别：",
    gender_options: {
      choose: "-- 选择 --",
      male: "男",
      female: "女",
      other: "其他"
    },
    symptoms: "💬 临床症状：",
    symptoms_placeholder: "请录入通过四诊收集到的所有症状。每行一个症状，包括症状名称和其特点，如发作环境、强度、频率、持续时间、加重/减轻因素……",
    back: "⬅ 返回",
    next: "继续 ➡"
  },

  // ==== 步骤2：症状评估 ====
  step2: {
    title: "📊 第2步：症状严重度评估",
    extract: "🧠 从第1步提取症状",
    ranking: "🔃 按VAS排序",
    followup_chart_title: "📈 不同就诊VAS进展图：",
    vas_label: "VAS",
    back: "⬅ 返回",
    next: "继续 ➡"
  },

  // ==== 步骤3：辩证 ====
  step3: {
    title: "🧠 第3步：中医辩证",
    past_syndrome_title: "📜 既往中医证候：",
    tree_label: "🔍 流程图分析：",
    analyze_tree: "🧠 分析流程图",
    gpt_suggest: "📚 GPT依据症状推荐：",
    gpt_btn: "⚙️ 症状分析",
    final_syndrome: "👩‍⚕️ 医生最终证候判定：",
    final_placeholder: "如：脾气虚，肾阳虚……",
    back: "⬅ 返回",
    next: "继续 ➡"
  },

  // ==== 步骤4：处方建议 ====
  step4: {
    title: "🧪 第4步：6S模型推荐处方",
    confirmed_syndrome: "📌 中医证候：",
    prominent_symptoms: "🔍 主要症状（VAS高）：",
    suggest_method_btn: "⚙️ GPT推荐治法",
    treat_method_placeholder: "GPT将在此显示适合患者的治法……",
    search_doiduoc_label: "🔍 输入关键词查对药：",
    search_doiduoc_placeholder: "如：腰痛，关节退化……",
    search_btn: "🔎 查询",
    doiduoc_result_label: "📋 查询结果：",
    doiduoc_result_placeholder: "结果将在此处显示……",
    select_effect: "🧪 选择治法以查看药物图表：",
    s1_source: "S1 – 病因（Source）：",
    s2_symptom: "S2 – 症状（Symptom）：",
    s3_site: "S3 – 部位（Site）：",
    s4_strength: "S4 – 强度（Strength）：",
    s5_sideeffect: "S5 – 副作用（Side-effect）：",
    s6_secondary: "S6 – 继发预防（Secondary Prevention）：",
    s1_placeholder: "直接作用于致病因子的药物（如：清热、解表、祛湿……）",
    s2_placeholder: "治疗主要主诉症状的药物（如：止痛、止咳、舒筋……）",
    s3_placeholder: "对病变部位有特异作用的药物（如：肺、脾、关节、经络……）",
    s4_placeholder: "根据疾病严重程度选择药力强的药物（如：剧痛选用强效止痛药……）",
    s5_placeholder: "能减少/抵消其他药物副作用的药物（如：辛热药配养阴药，苦寒药配健脾药……）",
    s6_placeholder: "阻断疾病进一步发展的药物（如：健脾防肝气郁及脾……）",
    final_gpt_formula_btn: "🤖 总结并去重",
    final_gpt_formula_placeholder: "GPT模型综合生成的处方……",
    doctor_edit_label: "👨‍⚕️ 医生修订：",
    doctor_edit_placeholder: "医生最终修订的处方……",
    back: "⬅ 返回",
    next: "继续 ➡"
  },

  // ==== 步骤5：处方校正 ====
  step5: {
    title: "🔧 第5步：处方校正",
    history_title: "📜 处方历史",
    edit_title: "✍️ 本次处方校正：",
    doctor_draft_label: "📋 第4步医生建议处方：",
    final_formula_title: "💊 最终处方",
    add_herb_placeholder: "药物名",
    add_dose_placeholder: "剂量",
    add_btn: "➕ 添加",
    usage_label: "💊 用法：",
    usage_placeholder: "每日一剂，餐后分两次服……",
    note_btn: "📝 添加备注",
    note_placeholder: "关于校正的备注：加某药，减某药……",
    analysis: {
      tukhi_btn: "1️⃣ 四气分析",
      flavor_btn: "📊 五味分析",
      meridian_btn: "📈 归经分析",
      direction_btn: "🧭 升降浮沉分析",
      effect_btn: "🌿 中医功效分析"
    },
    back: "⬅ 返回",
    save: "💾 保存病历"
  },

  // ==== 通用文本 ====
  common: {
    alert_enter_name: "请输入姓名！",
    alert_file_required: "请选择一个JSON文件！",
    alert_file_invalid: "⚠️ 文件无效：缺少病人姓名",
    alert_file_loaded: "✅ 已从文件加载病历：",
    alert_created: "✅ 已新建病历：",
    alert_profile_not_selected: "尚未选择病历！",
    alert_no_symptom: "⚠️ 无症状数据可分析。",
    alert_gpt_fail: "❌ GPT未能提取症状。",
    alert_no_symptom1: "⚠️ 第1步未录入症状描述。",
    alert_no_vas: "⚠️ 第2步无VAS数据。",
    alert_profile_loaded: "✅ 已加载病历：",
    alert_no_keyword: "⚠️ 请输入关键词。",
    alert_no_doiduoc: "❌ 未找到相关结果。",
    alert_missing_data: "⚠️ 证候或症状数据缺失。"
  },

  vas: "VAS",
  delete: "🗑️",
  add: "➕ 添加"
};
