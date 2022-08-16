import { Injectable } from '@angular/core';

@Injectable()
export class ARService {

  words: any;

  constructor() {
    this.words = {

      dir: 'rtl',

      fname: 'الاسم الاول',
      lname: 'الاسم الاخير',
      sesa: 'الرقم التعريفي',
      email: 'البريد الالكتروني',
      report: 'المشرف العام',
      dep: 'القسم',
      getting: 'بدء الأستخدام',
      message: 'مرحبا بكم في نظام الأجازات',
      tb_head: 'سياسات الإجازات',
      tb_column: [
        'تكون مدة الإجازة السنوية 21 يوما بأجر كامل لمن أمضى فى الخدمة سنة كاملة',
        ' ثلاثين يوماً لمن أمضى فى الخدمة عشر سنوات لدى صاحب عمل أو أكثر',
        ' إذا قلت مدة خدمة العامل عن سنة استحق إجازة بنسبة المدة التى قضاها فى العمل ',
        ' تزاد مدة الإجازة السنوية سبعة أيام للعمال الذين يعملون فى الأعمال الصعبة أو الخطرة أو المضرة بالصحة',
        'فى جميع الأحوال يجب أن يحصل العامل فى السنة الواحدة فعلاً على إجازة سنوية مدتها خمسة عشر يوماً',
      ],
      pass: 'كلمة المرور',
      acc: 'ليس لديك حساب ؟',
      acc_click: 'أضغط هنا',
      submit: 'تسجيل الدخول'
    }
  }
}
