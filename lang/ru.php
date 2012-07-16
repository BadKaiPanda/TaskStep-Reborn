<?php

	// Russian Language File - Compiled by Cord 2007
	//
	// The language system uses variables for every sentence that needs to be translated.
	// If you want to contribute a translation, just replace each sentence accordingly.
	// Please do consider submitting translations to the forums.
	// http://cunningtitle.com/forum/
	//
	// Longer sections which include paragraphs include HTML. Single words or sentences do not.
	// Just edit the bits in quotes to change what appears as text.

	// Login
	$l_login_button = "�����";
	$l_login_l1 = "����������, ������� ������.";
	$l_login_l2 = "������ ������.";
	$l_login_l3 = "������� ���� ��� �������� � ������ �����.";
	$l_login_l4 = "�������� ������.";
	$l_login_l5 = "������ ������� ���� ���������. ��� �����������, �������, ���� TaskStep �������� �� ��������� �������, �� ������������� ������.";

	// Navigation
	$l_nav_today = "�������";
	$l_nav_home = "�������";
	$l_nav_context = "�������";
	$l_nav_project = "�������";
	$l_nav_settings = "���������";
	$l_nav_help = "������";
	$l_nav_logout = "�����";

	// Sidebar
	$l_side_add = "����� ������";

	//Sections
		//This is stored in an array to overcome list problems
	$l_sectionlist = array('ideas' => "����",
	'tobuy' => "�������",
	'immediate' => "����������",
	'week' => "�� ���� ������",
	'month' => "� ���� ������",
	'year' => "� ���� ����",
	'lifetime' => "�����-������");

	// Front page
	$l_index_welcome = "����� ���������� � TaskStep";
	$l_index_tip = "�����";
	$l_index_noimmediate = "���������� ����� ���! <a href='edit.php'>����� ������</a>.";
	$l_index_introm = "������ ����";
	$l_index_introa = "������ ����";
	$l_index_introe = "������ �����";
	$l_index_introtext = "! �� ���������� � TaskStep. TaskStep ������ ��� ����,
    ����� �������� ��� �������� � ������������� ��������, ������������� ������
    � ��������� ����� ��������. TaskStep ��������� ���������� � <a href='http://www.davidco.com/'>GTD-�����</a>,
    �������� �� �� ������� � �������.</p>
    <p>��� �������� ������� �������� ���, ��� ������� ������ ������ �������� ���� ����.</p>";
	$l_index_1task = "�������� ���� ������.";
	$l_index_mtasks = "�������� �����: "; //Start counter
	$l_index_mtaske = "."; //End counter

	//Items
	$l_items_do = "�������� ��� ���������";
	$l_items_undo = "�������� ��� �����������";
	$l_items_edit = "��������";
	$l_items_del = "�������";
	$l_items_print = "����������� ������ 3 x 5";
	$l_items_sort = array('title' => "��������", //Another array for list purposes
	'date' => "����",
	'context' => "�������",
	'project' => "�������",
	'done' => "�������");
	$l_items_sorttext = "����������� ��:";
	$l_items_sortbutton = "�������������";

	//"Display by" pages
	$l_dbp_l1['context'] = "�������� ������, ����� ������� ��� ������, ����������� � ���.
	���� �������� ����� ������.";
	$l_dbp_l1['project'] = "�������� ������, ����� ������� ��� ������, ����������� � ���.
	���� �������� ����� ������.";
	$l_dbp_l2['context'] = "�������� ������ ��� ���������.
	���� �������� ����� ������.";
	$l_dbp_l2['project'] = "�������� ������ ��� ���������.
	���� �������� ����� ������.";
	$l_dbp_add['context'] = "�������� ������";
	$l_dbp_add['project'] = "�������� ������";
	$l_dbp_edit['context'] = "�������� ������";
	$l_dbp_edit['project'] = "�������� ������";
	$l_dbp_del['context'] = "������� ������";
	$l_dbp_del['project'] = "������� ������";
	$l_dbp_new['context'] = "�����������";
	$l_dbp_new['project'] = "�����������";

	//Forms (add, edit etc.)
	$l_forms_title = "��������";
	$l_forms_notes = "���������";
	$l_forms_section = "���������";
	$l_forms_context = "������";
	$l_forms_project = "������";
	$l_forms_contexte = "���������� ���������";
	$l_forms_projecte = "���������� ���������";
	$l_forms_date = "�������";
	$l_forms_url = "URL";
	$l_forms_button['add'] = "�������� ������";
	$l_forms_button['edit'] = "�������� ������";

	//Messages
	$l_msg_noitems = "� ���� ��������� ��� �����!";
	$l_msg_addsome = "����� ������!";
	$l_msg_notoday = "�� ������� ����� ���! ���� ������ ������ �� �����, ���� ��� �������";
	$l_msg_itemedit = "������ ���������!";
	$l_msg_itemadd = "������ ���������!";
	$l_msg_itemdel = "������ �������!";
	$l_msg_itemdo = "�������� ��� �����������";
	$l_msg_itemundo = "�������� ��� �������������";
	$l_msg_actionerror = "�������� ������� ��� ��������";
	$l_msg_unspecific = "��������, �� ��� ����� ����� ������� ���������, ������ � ������.";
	$l_msg_updated['context'] = "������ ��������";
	$l_msg_updated['project'] = "������ ��������";
	$l_msg_added['context'] = "������ ��������";
	$l_msg_added['project'] = "������ ��������";
	$l_msg_deleted['context'] = "������ ������";
	$l_msg_deleted['project'] = "������ ������.";
	$l_msg_noid = "��������, �� � URL ����� ������. �������� id ������ ���� ���������.";

	//Settings
	$l_cp_bookmarklettext = "���������� �����������, ����������� ����, ��� �������� ��������.";
	$l_cp_bookmarklet = "�������� � TaskStep";
	$l_cp_display_title = "���������";
	$l_cp_display_tips = "���������� ������ �� ������� ��������";
	$l_cp_display_css = "�����";
	$l_cp_display_nocss = "���";
	$l_cp_display_button = "�������� ���������";
	$l_cp_display_settingsupdated = "��������� ���������";
	$l_cp_display_tipson = "������ ������������";
	$l_cp_display_tipsoff = "������ �� ������������";
	$l_cp_display_defaultcss = "����� �� ��������� ������";

	$l_cp_password_title = "������";
	$l_cp_password_current = "������� ������";
	$l_cp_password_new1 = "����� ������";
	$l_cp_password_new2 = "��������� ����� ������";
	$l_cp_password_use = "������������ ������ � ������ (�������������)";
	$l_cp_password_fieldss = "����, �����������";
	$l_cp_password_fieldse = ", �������� �������������.";
	$l_cp_password_button = "�������� ������";
	$l_cp_password_incorrect = "�������� ������!";
	$l_cp_password_nomatch = "������ �� ���������!";
	$l_cp_password_updated = "���������� ������ �������!";

	$l_cp_tools_title = "������";
	$l_cp_tools_purge = "������� ��� ���������� ������";
	$l_cp_tools_update = "��������� ���� ����������";
	$l_cp_tools_export = "�������������� � <acronym title=\"Comma Separated Values\">CSV</acronym>";
		//NB The HTML for the acronym has been included for the sake of completeness, but make sure you leave the slashes before the quotes or TaskStep will break!
	$l_cp_tools_purged = " �����(�, �) �������.";
	$l_cp_tools_purgecheck = "�� �������, ��� �� ������ ������� ��� ����������� ������?";

	//Insert updated parts after this point
	//--1/4/07--
	$l_nav_allitems = "��� ������";

    //--28/8/07--
    $l_forms_titledefval = "�������� ������ ��� ����";
    $l_msg_updateassoctasks = "�������� ��������� ������";
    $l_print_commontitle = "������";
    $l_print_printalltasks = "������";
    $l_print_printtoday = "�������";
    $l_print_sectionnotfound = "��������� �� �������!";
    $l_msg_exportedto="�������������� �";
	//Insert updated parts before this point
?>
