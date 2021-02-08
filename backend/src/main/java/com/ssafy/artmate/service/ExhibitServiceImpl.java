package com.ssafy.artmate.service;


import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.JsonElement;
import com.ssafy.artmate.dto.ExhibitDto;
import com.ssafy.artmate.mapper.ExhibitMapper;

@Service
public class ExhibitServiceImpl implements ExhibitService{
	@Autowired
	private SqlSession sqlSession; 
	
	@Override
	public ExhibitDto selectExhibitBySeq(String seqNum) {
		return sqlSession.getMapper(ExhibitMapper.class).selectExhibitBySeq(seqNum);
	}

	@Override
	public boolean insertExhibit(ExhibitDto dto) {
		return sqlSession.getMapper(ExhibitMapper.class).insertExhibit(dto) == 1;
	}

	@Override
	public boolean insertTag(HashMap<String, Object> tagInfo) {
		return sqlSession.getMapper(ExhibitMapper.class).insertTag(tagInfo) == 1;
	}

	@Override
	public List<ExhibitDto> selectExhibitMyTag(String userId) {
		return sqlSession.getMapper(ExhibitMapper.class).selectExhibitMyTag(userId);
	}

	@Override
	public List<ExhibitDto> selectAllExhibit(String userId) {
		return sqlSession.getMapper(ExhibitMapper.class).selectAllExhibit(userId);
	}

	@Override
	public ExhibitDto selectOneExhibit(String userId, int id) {
		return sqlSession.getMapper(ExhibitMapper.class).selectOneExhibit(userId, id);
	}

	@Override
	public List<String> selectExhibitTags(int id) {
		return sqlSession.getMapper(ExhibitMapper.class).selectExhibitTags(id);
	}

	@Override
	public List<ExhibitDto> selectExhibitbyMap() {
		return sqlSession.getMapper(ExhibitMapper.class).selectExhibitbyMap();
	}
}
