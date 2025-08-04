const lang_vi = {
  // Tiêu đề chung
  app_title: "🧾 Ứng dụng hỗ trợ lập phương Y học cổ truyền",

  // Thanh điều hướng bước
  step_tab: [
    "B0: Hồ sơ",
    "B1: Lâm sàng",
    "B2: Đánh giá",
    "B3: Biện chứng",
    "B4: Gợi ý toa",
    "B5: Hiệu chỉnh"
  ],

  // ==== BƯỚC 0: HỒ SƠ ====
  step0: {
    title: "📁 Bước 0: Quản lý hồ sơ bệnh nhân",
    datetime: "📅 Ngày giờ khám:",
    choose_file: "📂 Chọn hồ sơ từ file JSON:",
    open_file: "📥 Mở hồ sơ",
    new_record: "🆕 Tạo hồ sơ mới:",
    enter_name_placeholder: "Nhập tên bệnh nhân...",
    create_record: "➕ Tạo hồ sơ",
    continue: "➡ Tiếp tục bước 1"
  },

  // ==== BƯỚC 1: THÔNG TIN LÂM SÀNG ====
  step1: {
    title: "📋 Bước 1: Nhập thông tin lâm sàng",
    name: "👤 Họ tên:",
    birth: "🎂 Năm sinh:",
    gender: "🚻 Giới tính:",
    gender_options: {
      choose: "-- Chọn --",
      male: "Nam",
      female: "Nữ",
      other: "Khác"
    },
    symptoms: "💬 Triệu chứng lâm sàng:",
    symptoms_placeholder: "Nhập các triệu chứng thu thập qua tứ chẩn. Mỗi triệu chứng trên một dòng, bao gồm tên triệu chứng và các đặc điểm của triệu chứng như hoàn cảnh khởi phát, cường độ, tần suất, thời gian, yếu tố tăng giảm...",
    back: "⬅ Quay lại",
    next: "Tiếp tục ➡"
  },

  // ==== BƯỚC 2: ĐÁNH GIÁ TRIỆU CHỨNG ====
  step2: {
    title: "📊 Bước 2: Đánh giá mức độ triệu chứng",
    extract: "🧠 Tách triệu chứng từ bước 1",
    ranking: "🔃 Ranking theo VAS",
    followup_chart_title: "📈 Biểu đồ tiến triển VAS các lần khám:",
    vas_label: "VAS",
    back: "⬅ Quay lại",
    next: "Tiếp ➡"
  },

  // ==== BƯỚC 3: BIỆN CHỨNG ====
  step3: {
    title: "🧠 Bước 3: Biện chứng Y học cổ truyền",
    past_syndrome_title: "📜 Hội chứng YHCT các lần khám trước:",
    tree_label: "🔍 Tiếp cận theo sơ đồ:",
    analyze_tree: "🧠 Phân tích sơ đồ",
    gpt_suggest: "📚 GPT gợi ý theo triệu chứng:",
    gpt_btn: "⚙️ Phân tích triệu chứng",
    final_syndrome: "👩‍⚕️ Hội chứng theo bác sĩ quyết định:",
    final_placeholder: "VD: Tỳ khí hư, Thận dương hư...",
    back: "⬅ Quay lại",
    next: "Tiếp tục ➡"
  },

  // ==== BƯỚC 4: GỢI Ý LẬP PHƯƠNG ====
  step4: {
    title: "🧪 Bước 4: Gợi ý bài thuốc theo mô hình 6S",
    confirmed_syndrome: "📌 Hội chứng Y học cổ truyền:",
    prominent_symptoms: "🔍 Các triệu chứng nổi bật (VAS cao):",
    suggest_method_btn: "⚙️ GPT gợi ý pháp trị",
    treat_method_placeholder: "GPT sẽ hiển thị pháp trị phù hợp cho bệnh nhân tại đây...",
    search_doiduoc_label: "🔍 Nhập từ khóa để tra cứu đối dược:",
    search_doiduoc_placeholder: "Ví dụ: Đau lưng, Thoái hóa khớp...",
    search_btn: "🔎 Tra cứu",
    doiduoc_result_label: "📋 Kết quả tra cứu:",
    doiduoc_result_placeholder: "Kết quả sẽ hiển thị tại đây...",
    select_effect: "🧪 Chọn pháp trị để xem biểu đồ vị thuốc:",
    s1_source: "S1 – Source:",
    s2_symptom: "S2 – Symptom:",
    s3_site: "S3 – Site:",
    s4_strength: "S4 – Strength:",
    s5_sideeffect: "S5 – Side-effect:",
    s6_secondary: "S6 – Secondary Prevention:",
    s1_placeholder: "Các vị thuốc điều trị trực tiếp vào tác nhân gây bệnh (ví dụ: thanh nhiệt, giải biểu, trừ thấp...)",
    s2_placeholder: "Các vị thuốc điều trị triệu chứng than phiền chính của bệnh nhân (ví dụ: chỉ thống, chỉ khái, thư cân...)",
    s3_placeholder: "Các vị thuốc có vị trí tác động đặc hiệu ngay vị trí bệnh (ví dụ: phế, tỳ, quan tiết, kinh lạc...)",
    s4_placeholder: "Chọn vị thuốc có hiệu lực tương ứng với mức độ nặng của bệnh (ví dụ: đau nhiều cần chọn thuốc chỉ thống có cường độ mạnh...)",
    s5_placeholder: "Các vị thuốc làm giảm/mất tác dụng phụ do các thuốc khác gây ra (ví dụ: bổ âm khi thuốc cay nóng, kiện tỳ khi thuốc đắng lạnh...)",
    s6_placeholder: "Các vị thuốc cắt đứt con đường diễn tiến tiếp theo của bệnh (ví dụ: kiện tỳ ngăn can khí uất thừa tỳ...)",
    final_gpt_formula_btn: "🤖 Tổng hợp và loại trùng",
    final_gpt_formula_placeholder: "Toa thuốc tổng hợp từ mô hình GPT...",
    doctor_edit_label: "👨‍⚕️ Bác sĩ chỉnh sửa:",
    doctor_edit_placeholder: "Bác sĩ hiệu chỉnh lại toa thuốc cuối cùng...",
    back: "⬅ Quay lại",
    next: "Tiếp tục ➡"
  },

  // ==== BƯỚC 5: HIỆU CHỈNH TOA ====
  step5: {
    title: "🔧 Bước 5: Hiệu chỉnh toa thuốc",
    history_title: "📜 Lịch sử toa thuốc",
    edit_title: "✍️ Hiệu chỉnh toa thuốc lần này:",
    doctor_draft_label: "📋 Toa bác sĩ đề xuất (từ bước 4):",
    final_formula_title: "💊 Toa thuốc cuối cùng",
    add_herb_placeholder: "Tên vị thuốc",
    add_dose_placeholder: "Liều",
    add_btn: "➕ Thêm",
    usage_label: "💊 Cách dùng:",
    usage_placeholder: "Sắc 1 thang/ngày, chia 2 lần sau ăn...",
    note_btn: "📝 Ghi chú thêm",
    note_placeholder: "Ghi chú về hiệu chỉnh: tăng liều X, giảm liều Y...",
    analysis: {
      tukhi_btn: "1️⃣ Phân tích Tứ khí",
      flavor_btn: "📊 Phân tích Ngũ vị",
      meridian_btn: "📈 Phân tích Quy kinh",
      direction_btn: "🧭 Phân tích Thăng – Giáng – Phù – Trầm",
      effect_btn: "🌿 Phân tích Tác dụng YHCT"
    },
    back: "⬅ Quay lại",
    save: "💾 Lưu hồ sơ"
  },

  // ==== Các text lẻ, chung ====
  common: {
    alert_enter_name: "Vui lòng nhập tên!",
    alert_file_required: "Vui lòng chọn một file JSON!",
    alert_file_invalid: "⚠️ File không hợp lệ: thiếu tên bệnh nhân",
    alert_file_loaded: "✅ Đã tải hồ sơ từ file: ",
    alert_created: "✅ Đã tạo hồ sơ mới: ",
    alert_profile_not_selected: "Chưa chọn hồ sơ!",
    alert_no_symptom: "⚠️ Không có dữ liệu triệu chứng để phân tích.",
    alert_gpt_fail: "❌ GPT không trích xuất được triệu chứng.",
    alert_no_symptom1: "⚠️ Chưa có mô tả triệu chứng ở bước 1.",
    alert_no_vas: "⚠️ Chưa có dữ liệu VAS từ bước 2.",
    alert_profile_loaded: "✅ Đã tải hồ sơ: ",
    alert_no_keyword: "⚠️ Vui lòng nhập từ khóa.",
    alert_no_doiduoc: "❌ Không tìm thấy kết quả phù hợp.",
    alert_missing_data: "⚠️ Thiếu dữ liệu hội chứng hoặc triệu chứng."
  },

  vas: "VAS",
  delete: "🗑️",
  add: "➕ Thêm"
};
