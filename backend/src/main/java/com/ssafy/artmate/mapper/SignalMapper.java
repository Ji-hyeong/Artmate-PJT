package com.ssafy.artmate.mapper;

import java.util.List;

import com.ssafy.artmate.Dto.SignalDto;

public interface SignalMapper {
	int insertSignal(SignalDto signal);// 알림 전송
	int deleteSignal(int id);// 알림 삭제
	int modifySignal(int id);// 알림 확인
	List<SignalDto> selectAllSignal(String getUserId);// 알림 목록 가져오기
}
